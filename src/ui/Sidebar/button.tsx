import React from 'react'
import styled, { css } from 'styled-components'

type ButtonProps = {
    createFile: (file?: MarkeeFile) => void
}

function Button ({ createFile }: ButtonProps): JSX.Element {
	return (
		<S.button onClick={() => createFile()}>
			{icons['add']}
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

        width: 100%;
        max-width: 100%;

        padding: 1.5rem 0;

        outline: none;
        border: none;
        border-radius: 3.3px;

        color: ${ theme.colors.lightBlack };
        background-color: ${ theme.colors.primary };
        
        margin-bottom: 4.6rem;

        &:hover {
            cursor: pointer;
            background-color: ${ theme.colors.primaryDark };
        }
    `}`,
	p: styled.p`
        font-size: 1.8rem;

        margin: 0;
        margin-left: 0.5rem;
    `,
	icons: {
		add: styled.svg`${({ theme }) => css`
            fill: ${ theme.colors.lightBlack };
        `}`,
	},
}

const icons = {
	add: (
		<S.icons.add width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M5.66663 1V10.3333" stroke="#293445" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M1 5.66669H10.3333" stroke="#293445" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		</S.icons.add>
	)
}

export { Button }