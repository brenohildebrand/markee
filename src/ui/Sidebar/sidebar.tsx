import { readFile } from 'fs'
import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Button } from './button'
import { File } from './file'
import { Label } from './label'
import { Logo } from './logo'

type SidebarProps = {
    files: MarkeeFile[]
    actions: {
        createFile: (file?: Partial<MarkeeFile>) => void
        readFile: (ID: string) => void
        updateFile: (file: MarkeeFile) => void
        deleteFile: (ID: string) => void
    }
}

function Sidebar ({ files, actions }: SidebarProps) {

    const { createFile, readFile, deleteFile } = actions;

    return (
        <S.div>
            <Logo/>
            <Label>Files</Label>
            <Button createFile={createFile}/>
            <S.ul>
                {files.map(({ id, name, active, status }) => {
                    return (
                        <File 
                            key={id} 
                            name={name} 
                            active={active}
                            status={status}
                            onClick={() => readFile(id)}
                            onDelete={() => deleteFile(id)}
                        />
                    )
                })}
            </S.ul>
        </S.div>
    )
}

const S = {
    div: styled.div`${({ theme }) => css`
        display: flex;
        flex-direction: column;
        
        flex: 2.3;
        height: 100%;

        padding: 2rem 5rem;
        background-color: ${ theme.colors.black };

        @media only screen and (min-width: 1440px) {
            flex: 1.4;
        }
    `}`,
    ul: styled.ul`
        width: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
    `,
}

export { Sidebar }