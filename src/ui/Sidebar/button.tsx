import React from "react";
import styled, { css } from "styled-components";

function Button () {
    return (
        <S.button>
            <S.svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.66663 1V10.3333" stroke="#293445" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 5.66669H10.3333" stroke="#293445" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </S.svg>
            <S.p>Add file</S.p>
        </S.button>
    )
}

const S = {
    button: styled.button`${({ theme }) => css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        color: ${theme.colors.lightBlack};
        background-color: ${theme.colors.primary};
        border-radius: 3.3px;

        width: 100%;
        height: 5rem;

        outline: none;
        border: none;
        
        margin-bottom: 4.6rem;

        &:hover {
            cursor: pointer;
            background-color: ${theme.colors.primaryDark};
        }
    `}`,
    svg: styled.svg`${({ theme }) => css`
        fill: ${theme.colors.lightBlack};
    `}`,
    p: styled.p`
        margin: 0;
        margin-left: 5px;
        font-size: 1.8rem;
    `
}

export { Button }