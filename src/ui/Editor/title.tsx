import React from 'react'
import styled from "styled-components"

type TitleProps = {
    value: string
}

function Title ({ value }: TitleProps) {
    return (
        <S.div>
            {icons['file']}
            <S.input type="text" value={value}/>
        </S.div>
    )
}

const S = {
    div: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin-bottom: 4rem;
    `,
    input: styled.input`
        font-size: 2.4rem;
        font-weight: 500;
        
        border: none;
        outline: none;
        background: none;
    `,
    icons: {
        file: styled.svg`
            margin-right: 0.8rem;

            width: 3.6rem;
            height: auto;
        `, 
    },
}

const icons = {
    file: (
        <S.icons.file width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#1FC8E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2V8H20" stroke="#1FC8E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 13H8" stroke="#1FC8E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17H8" stroke="#1FC8E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 9H9H8" stroke="#1FC8E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </S.icons.file>
    )
}

export { Title }