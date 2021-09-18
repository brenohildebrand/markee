import React, { useState } from 'react'
import styled from 'styled-components'
import { Sidebar } from '@ui/Sidebar/sidebar'
import { Editor } from '@ui/Editor/editor'
import { v4 } from 'uuid'

function App () {
  const [files, setFiles] = useState<MarkeeFile[]>([{
    id: v4(),
    name: 'Untitled',
    content: '',
    active: true,
    status: 'saved',
  }]);

  const actions = {
    createFile: (file?: MarkeeFile) => {

      if(file) setFiles((prevState) => prevState.concat(file))
      else {
        const defaultFile: MarkeeFile = {
          id: v4(),
          name: 'Untitled',
          content: '',
          active: true,
          status: 'saved',
        }

        setFiles((prevState) => prevState.map(file => ({
          ...file,
          active: false,
        })).concat(defaultFile))
      }
    }
  }

  return (
    <S.div>
      <Sidebar files={files} actions={actions}/>
      <Editor activeFile={files.filter(file => file.active)[0]}/>
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