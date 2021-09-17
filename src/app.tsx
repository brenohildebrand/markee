import React from 'react'
import { Sidebar } from '@ui/Sidebar/sidebar'
import { Editor } from '@ui/Editor/editor'
import styled, { css } from 'styled-components'

function App () {
  return (
    <Wrapper>
      <Sidebar/>
      <Editor/>
    </Wrapper>
  )
}

const Wrapper = styled.div`${({ theme }) => css`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 100%;
`}`

export { App }