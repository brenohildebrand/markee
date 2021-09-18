import React, { MutableRefObject, Ref, RefObject, useRef, useState } from 'react'
import styled from 'styled-components'
import { Sidebar } from '@ui/Sidebar/sidebar'
import { Editor } from '@ui/Editor/editor'
import { v4 } from 'uuid'

type TimeoutManager = {
  ID: number | undefined
  fileID: string | undefined
}

function App () {
  const [files, setFiles] = useState<MarkeeFile[]>([]);

  const inputRef: RefObject<HTMLInputElement> = useRef(null)
  const timeoutManager: RefObject<TimeoutManager> = useRef({ ID: undefined, fileID: undefined })

  const actions = {
    createFile: (file: Partial<MarkeeFile> = {}) => {
      const defaultFile: MarkeeFile = {
        id: v4(),
        name: 'Untitled',
        content: '',
        active: true,
        status: 'saved'
      }

      setFiles((prevState) => prevState
      .map(oldFile => ({
        ...oldFile,
        active: false,
      }))
      .concat({
        ...defaultFile,
        ...file,
        active: true
      }))

      inputRef.current?.focus()
    },
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

      inputRef.current?.focus()
    },
    updateFile: (file: MarkeeFile) => {
      setFiles((prevState) => prevState.map(oldFile => {
        if(oldFile.id === file.id) {
          /*
            The following code handles the status of the file being updated.
            It should go from 'editing' to 'saving' after 300ms of idling. And
            it should go from 'saving' to 'saved' after 300ms again.
          */

          /*
            The file started to receive updates, let's set its status to 'editing'.
          */
          file.status = 'editing'

          if(timeoutManager.current) {

            const { fileID, ID } = timeoutManager.current

            /* 
              If there's an old timeout for this same file, it will be cleaned up.
              If there's an old timeout, but for another file, it will keep running 
              to notify the user that this another file was saved. 
            */
            if(fileID === file.id && typeof ID === 'number') clearTimeout(ID)

            /*
              Keep track of the latest timeout.
            */
            timeoutManager.current.fileID = file.id;

            /* 
              Start a fresh new timeout that will be triggered after 300ms of idling.
            */
            timeoutManager.current.ID = window.setTimeout(() => {
              setFiles(prevState => prevState.map(oldFile => {
                if(file.id === oldFile.id) oldFile.status = 'saving'
                return oldFile
              }))

              /* 
                Call another timeout to wait more 300ms so that the user can be
                notified that this file was saved.
              */
              if(timeoutManager.current) {
                timeoutManager.current.ID = window.setTimeout(() => {
                  setFiles(prevState => prevState.map(oldFile => {
                    if (file.id === oldFile.id) oldFile.status = 'saved'
                    return oldFile
                  }))
                }, 300)
              }
            }, 300)
          }
          
          return file;
        }
        return oldFile;
      }))
    },
    deleteFile: (ID: string) => {
      setFiles((prevState) => prevState.filter(oldFile => oldFile.id !== ID))
    }
  }

  return (
    <S.div>
      <Sidebar 
        files={files} 
        actions={actions}
      />
      <Editor 
        activeFile={files.find(file => file.active) ?? undefined}
        inputRef={inputRef} 
        actions = {actions}
      />
    </S.div>
  )
}

const S = {
  div:  styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 100%;
  `
}

export { App }