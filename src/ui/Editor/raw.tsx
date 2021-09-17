import React from 'react'
import styled, { css } from "styled-components"

function Raw () {
    return (
        <Div>
        <Textarea/>
        </Div>
    )
}

const Div = styled.div`${({ theme }) => css`
    padding: 0 2rem 6rem 2rem;
    border-right: 1px solid ${theme.colors.black};
`}`

const Textarea = styled.textarea`${({ theme }) => css`
    font-family: Inconsolata;
    font-size: 1.8rem;
    font-weight: 500;

    border: none;
    outline: none;
    resize: none;
    
    width: 100%;
    height: 100%;
`}`

export { Raw }