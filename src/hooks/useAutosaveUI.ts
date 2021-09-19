import { useEffect } from "react";

type TimeoutManager = {
    currentTimeout: number | undefined
    editingFileID: string | undefined
}

type UseAutosaveUIProps = {
    files: MarkeeFile[]
    setFiles: React.Dispatch<React.SetStateAction<MarkeeFile[]>>
    timeoutManager: React.MutableRefObject<TimeoutManager>
}

const useAutosaveUI = ({ files, setFiles, timeoutManager }: UseAutosaveUIProps) => {
    /* 
        After 300ms of idling, a file with the 'editing' status should have it changed 
        to 'saving'. Then after 300ms of idling again, this same file should have the 
        'saved' status. If during the 'saving' period the user edits the same file, its 
        status should come back to 'editing'.
    */

    /* This useEffect only executes its code if the activeFile is being edited */
    useEffect(() => {
        const activeFile = files.find(file => file.active);

        function updateStatus (activeFile: MarkeeFile) {
        /* 
            Rules for this feature:
            
            1.  The current file should update to "saved" if 
                and only if the file is not being edited again.

            2.  The last timeout ( stored at timeoutManager ) 
                should be cleaned up if and only if the file 
                being edited is the same.
        */

        /* Update Timeout and activeFile status */
        timeoutManager.current.currentTimeout =  window.setTimeout(() => {
            setFiles(prevState => prevState.map(file => {
            if(file.id === activeFile!.id) file.status = 'saving'
            return file
            }))

            /* Update Timeout and the same activeFile status */
            timeoutManager.current.currentTimeout = window.setTimeout(() => {
            setFiles(prevState => prevState.map(file => {
                if(file.id === activeFile!.id) file.status = 'saved'
                return file
            }))
            }, 300)
        }, 300)
        }

        if(activeFile && activeFile.status === 'editing') updateStatus(activeFile)

        /* 
            No, we don't clean up any timeouts here. We clean up them in the updateFile
            action if needed.
        */
    }, [files])
}

export { useAutosaveUI }