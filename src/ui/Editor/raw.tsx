import React from 'react'
import styled, { css } from "styled-components"

function Raw () {
    return (
        <Div>
        <Textarea value="Lorem ipsum!"/>
        </Div>
    )
}

const Div = styled.div`${({ theme }) => css`
    flex: 5;

    width: 100%;
    height: 100%;

    padding-right: 5rem;
    border-right: 1px solid rgba(30, 41, 59, 0.12);
`}`

const Textarea = styled.textarea`${({ theme }) => css`
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

export { Raw }