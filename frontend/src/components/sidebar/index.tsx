import { Upload } from '../upload';
import { vm } from '../../styles/vm.styles';
import { Search } from '../search';
import { Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { documentApi } from '../../api/documentApi';

export const Sidebar = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [docs, setDocs] = useState<any[]>([])

  const getAllUploadedDocs = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const documents = await documentApi.getDocuments()
      if (documents?.length) {
        setDocs(documents)
      } else {
        setDocs([])
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'failed to load documents')
      setDocs([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getAllUploadedDocs()

  }, [])



  return (
    <div className="flex flex-col h-full gap-4">
      {/* Upload section */}
      <div className="space-y-2">
        <p className={vm.panelHeader}>Upload</p>
        <Upload />
      </div>

      {/* Divider */}
      <div className={vm.divider} />

      {/* Search section */}
      <div className="space-y-2">
        <p className={vm.panelHeader}>Search Documents</p>
        <Search />
      </div>

      {/* Divider */}
      <div className={vm.divider} />

      {/* Documents list */}
      <div className="space-y-2 flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between">
          <p className={vm.panelHeader}>Your Documents</p>
          <span className={vm.badge.gray}>{docs.length}</span>
        </div>

        {/* Documents scroll area */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1">
          {/* Document item 1 */}
          {docs.map((doc: any) => (
            <div className={vm.cardHover}>
              <div key={doc.id ?? doc.file_name} className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className={`${vm.text.subheading} truncate`} title={doc.file_name}>{doc.file_name}</p>
                  <p className={vm.text.caption}>pages {doc.total_pages}</p>
                </div>
                <span className={vm.badge.green}>
                  <span className={vm.dot.green}></span>
                  Ready
                </span>
              </div>
            </div>
          ))}
          
        </div>
      </div>

      {/* Footer action */}
      <button className={`${vm.btn.danger} w-full justify-center`}>
        <Trash2 size={14} />
        Clear All
      </button>
    </div>
  );
};

