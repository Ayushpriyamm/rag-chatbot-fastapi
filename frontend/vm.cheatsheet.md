# VectorMind Style Cheatsheet

Import once, use everywhere:
```ts
import { vm, colors } from '@/styles/vm.styles'
```

---

## Layout shells

```tsx
<div className={vm.page}>                {/* full page bg */}
<div className={vm.sidebar}>             {/* left sidebar */}
<div className={vm.topbar}>              {/* top nav bar */}
<div className={vm.contextPanel}>        {/* right panel */}
<p   className={vm.panelHeader}>LABEL</p>
```

---

## Cards & surfaces

```tsx
<div className={vm.card}>               {/* raised card */}
<div className={vm.cardHover}>          {/* clickable file item */}
<div className={vm.cardActive}>         {/* selected file item */}
<div className={vm.surface}>            {/* flat metric tile */}
```

---

## Buttons

```tsx
<button className={vm.btn.primary}>Save</button>
<button className={vm.btn.secondary}>Cancel</button>
<button className={vm.btn.ghost}>More</button>
<button className={vm.btn.danger}>Delete</button>
<button className={vm.btn.icon}><IconX /></button>
<button className={vm.btn.send}><IconArrow /></button>
```

---

## Badges

```tsx
<span className={vm.badge.green}>Indexed</span>
<span className={vm.badge.orange}>Indexing 64%</span>
<span className={vm.badge.red}>Failed</span>
<span className={vm.badge.blue}>Active</span>
<span className={vm.badge.gray}>Pending</span>

{/* with status dot */}
<span className={vm.badge.green}>
  <span className={vm.dot.green} />Indexed
</span>
```

---

## Top-bar status pills

```tsx
<span className={vm.statusPill.green}>
  <span className={vm.dot.green} />Vector DB Connected
</span>
<span className={vm.statusPill.blue}>
  <span className={vm.dot.blue} />LLM Active
</span>
<span className={vm.statusPill.gray}>128 Documents Indexed</span>
```

---

## Upload zone

```tsx
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { vm } from '@/styles/vm.styles'

const [dragging, setDragging] = useState(false)
const [progress, setProgress] = useState<number | null>(null)

<div
  className={cn(
    vm.uploadZone,
    dragging && vm.uploadZoneDragging,
    isLoading && vm.uploadZoneLoading,
  )}
  onDragOver={e => { e.preventDefault(); setDragging(true) }}
  onDragLeave={() => setDragging(false)}
>
  {/* progress bar */}
  {isLoading && (
    <div className={vm.progressTrack}>
      <div className={vm.progressFillAnimate} />
    </div>
  )}
  {progress !== null && !isLoading && (
    <div className={vm.progressTrack}>
      <div className={vm.progressFill} style={{ width: `${progress}%` }} />
    </div>
  )}
</div>
```

---

## Inputs & search

```tsx
<input className={vm.input} placeholder="Ask anything..." />

<div className={vm.searchWrap}>
  <SearchIcon className="text-[#555d72] w-3.5 h-3.5" />
  <input className={vm.searchInput} placeholder="Search documents" />
</div>
```

---

## Chat interface

```tsx
{/* user bubble */}
<div className="flex justify-end">
  <p className={vm.bubbleUser}>{message}</p>
</div>

{/* assistant response */}
<div className={vm.bubbleAssistant}>{response}</div>

{/* source pills below response */}
<div className="flex gap-2 flex-wrap mt-2">
  <span className={vm.sourcePill}>
    <FileIcon /> ABC_Handbook.pdf · Page 3 · 96% match
  </span>
</div>

{/* input bar */}
<div className={vm.chatInputWrap}>
  <input className={vm.chatInput} placeholder="Ask anything about your documents..." />
  <button className={vm.btn.icon}><MicIcon /></button>
  <button className={vm.btn.send}><SendIcon /></button>
</div>
```

---

## Retrieval context chunks (right panel)

```tsx
<div className={vm.chunkCard}>
  <div className="flex justify-between items-center">
    <span className={vm.text.label}>Chunk #142</span>
    <span className={vm.chunkScoreText}>0.96</span>
  </div>
  <div className={vm.chunkScoreBar} style={{ width: '96%' }} />
  <p className={vm.text.body}>"The probation period extends to ninety (90) calendar days..."</p>
</div>
```

---

## Feedback toasts

```tsx
{error && (
  <div className={vm.toast.error}>
    <ErrorIcon className="text-red-400 w-3.5 h-3.5 shrink-0" />
    <p className={vm.toastText.error}>{error}</p>
  </div>
)}

{success && (
  <div className={vm.toast.success}>
    <CheckIcon className="text-green-400 w-3.5 h-3.5 shrink-0" />
    <p className={vm.toastText.success}>Document uploaded successfully!</p>
  </div>
)}
```

---

## Typography

```tsx
<h2 className={vm.text.heading}>Documents</h2>
<h3 className={vm.text.subheading}>Retrieval Context</h3>
<p  className={vm.text.body}>3 documents in context</p>
<p  className={vm.text.caption}>Apr 12, 2025 · 142 chunks</p>
<a  className={vm.text.link}>View source</a>
<p  className={vm.text.label}>RETRIEVED CHUNKS</p>

{/* inline highlight (e.g. coloured term in AI response) */}
<span className={vm.text.highlight}>probation period is 90 days</span>

{/* inline code */}
<code className={vm.text.code}>doc_a1f9c2</code>
```

---

## File icon chips

```tsx
<div className={vm.fileIcon.red}>PDF</div>
<div className={vm.fileIcon.blue}>PDF</div>
<div className={vm.fileIcon.green}>PDF</div>
<div className={vm.fileIcon.gray}>TXT</div>
```

---

## Suggested prompt chips (empty state)

```tsx
<button className={vm.promptChip}>
  <QuestionIcon className="w-3.5 h-3.5 text-blue-400" />
  What is the probation period?
</button>
```

---

## Dividers

```tsx
<hr className={vm.divider} />           {/* horizontal */}
<div className={vm.dividerV} />         {/* vertical (in flex row) */}
```

---

## Scrollable containers

```tsx
<div className={`overflow-y-auto ${vm.scrollbar}`}>
  {items}
</div>
```

---

## Raw colour tokens (for SVGs, charts, inline styles)

```ts
import { colors } from '@/styles/vm.styles'

// e.g. in a Recharts stroke
<Line stroke={colors.accentBlue} />

// SVG circle
<circle fill={colors.accentBlueDim} stroke={colors.borderBlue} />
```

---

## tailwind.config.ts — required additions

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(300%)' },
        },
      },
      animation: {
        slide: 'slide 1s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
}

export default config
```
