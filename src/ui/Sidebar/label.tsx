import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

type LabelProps = {
    children: ReactNode
}

function Label ({ children }: LabelProps): JSX.Element {
	return <S.div>{children}</S.div>
}

const S = {
	div: styled.div`${({ theme }) => css`
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 100%;
        max-width: 100%;
        height: auto;

        font-size: 2.2rem;
        font-weight: 500;

        color: white;

        margin-bottom: 4.6rem;
        
        &::before, &::after {
            display: block;
            
            content: '';
            height: 0.3rem;

            background-color: ${ theme.colors.primary };
            border-radius: 15px;
        }

        &::before { 
            width: 5rem; 
            margin-right: 1rem;
        }
        &::after { 
            width: 100%; 
            margin-left: 1rem;
        }
    `}`,
}

export { Label }