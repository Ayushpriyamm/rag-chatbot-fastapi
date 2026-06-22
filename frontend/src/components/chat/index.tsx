import { SendIcon, PlusIcon } from 'lucide-react';
import { vm } from '../../styles/vm.styles';
import { chatApi } from '../../api/chatApi';
import { useEffect, useRef, useState } from 'react';
import type { ChatMessage } from '../../types/chat';



export const Chat = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)


  const chatWithLLM = async (query: string) => {
    if (!query.trim()) return
    setIsLoading(true)

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: query,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, userMessage])

    try {
      const response = await chatApi.sendMessage(query)

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: response.response,
        timestamp: new Date().toISOString()
      }

      setMessages(prev => [...prev, assistantMessage])

    } catch (error) {
      console.log("Error connecting with LLM", error)
    }
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [messages])


  return (
    <div className="flex flex-col h-full">
      {/* Messages area - scrollable */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col">
        {/* Empty state with suggested prompts */}
        {messages.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
            <div className="flex flex-col gap-2">
              <h2 className={vm.text.heading}>Welcome to RAG Chatbot</h2>
              <p className={vm.text.body}>Upload documents and ask questions about them</p>
            </div>

            {/* Suggested prompts */}
            <div className="grid gap-2 w-full max-w-md">
              <p className={`${vm.text.label} text-center`}>Try asking about:</p>
              <button className={vm.promptChip}>
                <PlusIcon size={14} />
                Summarize the main points
              </button>
              <button className={vm.promptChip}>
                <PlusIcon size={14} />
                Find specific information
              </button>
              <button className={vm.promptChip}>
                <PlusIcon size={14} />
                Compare documents
              </button>
            </div>
          </div>
        )}

        {/* Messages (will be populated with logic) */}
        {/* User message example */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.role === "user"
                ? "flex justify-end"
                : "flex justify-start"
            }
          >
            <div
              className={
                msg.role === "user"
                  ? vm.bubbleUser
                  : vm.bubbleAssistant
              }
            >
              {msg.content}
            </div>
          </div>
        ))}


        {isLoading && (
          <div className="flex justify-start">
            <div className={vm.bubbleAssistant}>
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area - fixed at bottom */}
      <div className="border-t border-white/[0.07] p-4 shrink-0">
        <form className={vm.chatInputWrap}
          onSubmit={async (e) => {
            e.preventDefault()
            if (!message.trim()) return;

            chatWithLLM(message)

            setMessage("")
          }}
        >
          <input
            className={vm.chatInput}
            placeholder="Ask anything about your documents..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type='submit'
            className={vm.btn.send}
            aria-label="Send message"

          >
            <SendIcon size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};
