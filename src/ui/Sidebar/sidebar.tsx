import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from './button'
import { File } from './file'
import { Label } from './label'
import { Logo } from './logo'

function Sidebar () {
    return (
        <Div>
            <Logo/>
            <Label>Files</Label>
            <Button/>
            <File children="README.md"/>
            <File children="WASSUP.md"/>
            <File children="CONTRIBUTIONS.md"/>
        </Div>
    )
}

const Div = styled.div`${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    flex: 2.3;
    height: 100%;

    padding: 2rem 5rem;
    background-color: ${theme.colors.black};
`}`

export { Sidebar }