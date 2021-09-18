import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from './button'
import { File } from './file'
import { Label } from './label'
import { Logo } from './logo'

type SidebarProps = {
    files: MarkeeFile[]
}

function Sidebar ({ files }: SidebarProps) {
    return (
        <S.div>
            <Logo/>
            <Label>Files</Label>
            <Button/>
            <S.ul>
                {files.map(({ id, name, active, status }) => {
                    return (
                        <File 
                            key={id} 
                            name={name} 
                            active={active}
                            status={status}
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