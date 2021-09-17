import React from "react";
import styled, { css } from "styled-components";

function Button () {
    return (
        <StyledButton>
            <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.66663 1V10.3333" stroke="#293445" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 5.66669H10.3333" stroke="#293445" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
            <P>Add file</P>
        </StyledButton>
    )
}

const StyledButton = styled.button`${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.lightBlack};
    background-color: ${theme.colors.primary};
    border-radius: 3.3px;

    padding: 0.5rem 5rem;

    outline: none;
    border: none;
`}`

const Svg = styled.svg`${({ theme }) => css`
    fill: ${theme.colors.lightBlack};
`}`

const P = styled.p`
    margin: 0;
    margin-left: 5px;
    font-size: 1.35rem;
`

export { Button }