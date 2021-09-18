import React from 'react'
import styled from 'styled-components'
import { Sidebar } from '@ui/Sidebar/sidebar'
import { Editor } from '@ui/Editor/editor'

const files: MarkeeFile[] = 
[
    {
        id: '001',
        name: 'README.md',
        content: 'I \'m a README file',
        active: true,
        status: 'editing',
    },
    {
        id: '002',
        name: 'CONTRIBUTIONS.md',
        content: 'Contribute to the community!',
        active: false,
        status: 'saved',
    },
]

function App () {
  return (
    <S.div>
      <Sidebar files={files}/>
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