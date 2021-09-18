import React from 'react'
import styled, { css } from "styled-components"

function Raw () {
    return (
        <S.div>
        <S.textarea value="Lorem ipsum!"/>
        </S.div>
    )
}

const S = {
    div: styled.div`${({ theme }) => css`
        flex: 5;

        width: 100%;
        height: 100%;

        padding-right: 5rem;
        border-right: 1px solid rgba(30, 41, 59, 0.12);
    `}`,
    textarea: styled.textarea`${({ theme }) => css`
        font-family: Inconsolata;
        font-size: 2rem;
        font-weight: 500;

        border: none;
        outline: none;
        resize: none;
        background: none;

        width: 100%;
        height: 100%;
    `}`
}

export { Raw }