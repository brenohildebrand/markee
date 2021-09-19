import { RefObject, useRef, useState } from 'react'
import { v4 as createID } from 'uuid'
import { useAutosave } from '@hooks/useAutosave'
import { useAutosaveUI } from '@hooks/useAutosaveUI'

type TimeoutManager = {
  currentTimeout: number | undefined
  editingFileID: string | undefined
}

const useFiles = () => {
  /* State to keep track of our files in the React application. */
  const [files, setFiles] = useState<MarkeeFile[]>([]);

  /* Used later to automatically focus on the title of a file */
  const inputRef: RefObject<HTMLInputElement> = useRef(null)

  /* Used to manage the autosaveUI feature */
  const timeoutManager = useRef<TimeoutManager>({ 
    currentTimeout: undefined,
    editingFileID: undefined
  })

  /* 
    Autosave hooks. Notice that the concerns about the UI and the
    actual autosave are separated.
  */
  useAutosaveUI({ files, setFiles, timeoutManager });
  useAutosave({files, setFiles });

  /* 
    Actions have the CRUD functions for our files. They affect only
    the Front-End and the useAutosave do the job for the "Back-End",
    i.e.,the local storage stuff.
  */
  const actions = {
    /* createFile creates a file and make it active */
    createFile: (file: Partial<MarkeeFile> = {}) => {
      const defaultFile: MarkeeFile = {
        id: createID(),
        name: 'Untitled',
        content: '',
        active: true,
        status: 'saved'
      }

      const newFile = {
        ...defaultFile,
        ...file,
        active: true
      }

      setFiles((prevState) => prevState
      .map(oldFile => ({
        ...oldFile,
        active: false,
      }))
      .concat( newFile ))

      window.history.pushState(null, '', `/file/${newFile.id}`)
      inputRef.current?.focus()
    },
    /* readFile makes a file active */
    readFile: (ID: string) => {
      setFiles((prevState) => prevState.map(oldFile => {
        if(oldFile.id === ID) 
        {
          return {
            ...oldFile,
            active: true,
          }
        } 

        return {
          ...oldFile,
          active: false,
        }
      }))

      window.history.pushState(null, '', `/file/${ID}`)
      inputRef.current?.focus()
    },
    /* 
      updateFile is called when changing anything on any file, so
      it's also used to help the management of the UI changes 
      during the Front-End autosave.
    */
    updateFile: (file: MarkeeFile) => {

      /* UI Management */
      if(timeoutManager.current.editingFileID === file.id) {
        /* If we continue editing the same file, we should clear the timeout */
        clearTimeout(timeoutManager.current.currentTimeout)
      }
      timeoutManager.current.editingFileID = file.id
  
      /* Files Update */
      setFiles((prevState) => prevState.map(oldFile => {
        if(file.id === oldFile.id) {
          file.status = 'editing'
          return file
        }

        return oldFile;
      }))
    },
    /* deleteFile is used just to delete a file without any extra features */
    deleteFile: (ID: string) => {
      setFiles((prevState) => prevState.filter(oldFile => oldFile.id !== ID))
    }
  }

  /* Return all the functions used by the App component */
  return {
    files,
    actions,
    inputRef
  }
}

export { useFiles }