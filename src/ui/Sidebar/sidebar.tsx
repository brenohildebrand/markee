import React from 'react'
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
        justify-content: flex-start;
        align-items: center;

        width: 25%;
        max-width: 25%;
        height: 100%;

        padding: 2rem 5rem;
        background-color: ${ theme.colors.black };
    `}`,
    ul: styled.ul`
        list-style: none;

        width: 100%;
        max-width: 100%;

        overflow: auto;

        margin: 0;
        padding: 0;

        &::-webkit-scrollbar {
            width: 1rem;
        }

        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.2);
        }       

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #eeeeee;
        }
    `,
}

export { Sidebar }