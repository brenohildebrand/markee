import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

type LabelProps = {
    children: ReactNode
}

function Label ({ children }: LabelProps) {
    return (
        <Div>
            <LineStart/>
            {children}
            <LineEnd/>
        </Div>
    )
}

const Div = styled.div`${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: auto;

    color: white;
    font-size: 2.2rem;
    font-weight: 500;

    margin-bottom: 4rem;
`}`

const LineStart = styled.div`${({ theme }) => css`
    height: 0.3rem;
    width: 5rem;

    background-color: ${theme.colors.primary};
    border-radius: 15px;
    margin-right: 1rem;
`}`

const LineEnd = styled.div`${({ theme }) => css`
    height: 0.3rem;
    width: 100%;

    background-color: ${theme.colors.primary};
    border-radius: 15px;
    margin-left: 1rem;
`}`

export { Label }