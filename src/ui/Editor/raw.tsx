import React, { ChangeEvent } from 'react'
import styled from "styled-components"

type RawProps = {
    content: string
    handleOnChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

function Raw ({ content, handleOnChange }: RawProps) {
    return (
        <S.div>
            <S.textarea 
                value={content}
                onChange={handleOnChange}
            />
        </S.div>
    )
}

const S = {
    div: styled.div`
        display: block;

        width: 50%;
        max-width: 50%;
        height: 100%;
        max-height: 100%;

        padding-right: 5rem;
        border-right: 1px solid rgba(30, 41, 59, 0.12);
    `,
    textarea: styled.textarea`
        font-family: Inconsolata;
        font-size: 2rem;
        font-weight: 500;

        width: 100%;
        height: 100%;
        max-height: 100%;

        border: none;
        outline: none;
        resize: none;
        background: none;
    `,
}

export { Raw }