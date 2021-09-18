import React, { ReactNode } from 'react'
import styled from "styled-components"

type RawProps = {
    children: string
}

function Raw ({ children }: RawProps) {
    return (
        <S.div>
            <S.textarea value={children}/>
        </S.div>
    )
}

const S = {
    div: styled.div`
        flex: 5;

        width: 100%;
        height: 100%;

        padding-right: 5rem;
        border-right: 1px solid rgba(30, 41, 59, 0.12);
    `,
    textarea: styled.textarea`
        font-family: Inconsolata;
        font-size: 2rem;
        font-weight: 500;

        width: 100%;
        height: 100%;

        border: none;
        outline: none;
        resize: none;
        background: none;
    `,
}

export { Raw }