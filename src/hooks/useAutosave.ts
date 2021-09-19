import localforage from "localforage"
import { useEffect } from "react"

type UseAutosaveProps = {
    files: MarkeeFile[]
    setFiles: React.Dispatch<React.SetStateAction<MarkeeFile[]>>
}

const useAutosave = ({ files, setFiles }: UseAutosaveProps) => {
    /* 
        Triggered just at the first time, this useEffect is responsible for 
        getting the data from the local forage.
    */
    useEffect(() => {
        async function getLocalData () {
            const files = await localforage.getItem<MarkeeFile[]>('markee')
    
            if(files) {
                setFiles(files.map((file) => {
                    /*
                        Solving Corner Case. Look at the next useEffect for more info.

                        Although the last modification on the file with the 'saving' status 
                        could possibly not be saved at all, we set the status to 'saved', cause
                        our current version is the saved one.
                    */
                    if(file.status === 'saving') 
                        file.status = 'saved'
            

                    return file
                }))
    
                window.history.pushState(null, '', `/file/${files.find(file => file.active)?.id}`)
            }
        }

        getLocalData()
    }, [])

    /* This useEffect updates the local forage when the files state is updated */
    useEffect(() => {
        /*
            There are some corner cases here.

            1.  When the files are saved during the 'saving' status, they never change to 
                the 'saved' one. This issue is solved in the previous useEffect.

            2.  When the app is fast reloaded and this useEffect persists the data while
                files are still an empty array (they weren't updated by the previous 
                useEffect yet). This issue is solved with the if condition below.
        */
        if(files.length > 0) 
            localforage.setItem('markee', files)
    }, [files])
}

export { useAutosave }



