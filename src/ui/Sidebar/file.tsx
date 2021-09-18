import React, { MouseEvent } from 'react'
import styled, { css } from "styled-components"

type FileProps = {
    name: string
    active: boolean
    status: 'editing' | 'saving' | 'saved'
    onClick: () => void
    onDelete: () => void
}

function File ({ name, active, status, onClick, onDelete }: FileProps) {

    const handleDeleteButtonOnClick = (e: MouseEvent) => {
        e.stopPropagation()
        onDelete()
    }

    return (
        <S.li active={active} onClick={onClick}>
            <S.div>
                {
                    active 
                    ? icons['active'] 
                    : icons['inactive']
                }
                <S.a>{name}</S.a>
            </S.div>
            <S.div>
                {active && (
                    <S.button>
                        {icons[status]}
                    </S.button>
                )}
                {!active && (
                    <S.button onClick={handleDeleteButtonOnClick}>
                        {icons['delete']}
                    </S.button>
                )}
            </S.div>
        </S.li>
    )
}


const S = {
    li: styled.li<{ active: boolean }>`${({ theme, active }) => css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        color: rgba(255, 255, 255, 0.65);
        background-color: ${ theme.colors.black };

        padding: 10px 8px;

        border-radius: 6px;

        margin-bottom: 1rem;

        & > div > button {
            visibility: hidden;
        }

        &:hover {
            cursor: pointer;

            color: white;
            background-color: rgba(255, 255, 255, 0.05);

            & > div > button { visibility: visible; }
        }

        ${active && css`
            color: white;
            background-color: rgba(255, 255, 255, 0.05);

            & > div > button { visibility: visible; }

            &:hover { cursor: default; }
        `}
    `}`,
    div: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `,
    a: styled.a`
        font-size: 1.6rem;

        margin: 0;
        margin-left: 10px;
    `,
    button: styled.button`
        display: block;

        border: none;
        outline: none;
        background: none;

        &:hover {
            cursor: pointer;
        }
    `,
    icons: {
        active: styled.svg``,
        inactive: styled.svg``,
        editing: styled.svg``,
        saving: styled.svg`
            animation: spin 1s infinite linear;

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(359deg); }
            }
        `,
        saved: styled.svg``,
        delete: styled.svg``,
    }
}

const icons = {
    active: (
        <S.icons.active width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2.88062H6C5.46957 2.88062 4.96086 3.09133 4.58579 3.4664C4.21071 3.84147 4 4.35018 4 4.88062V20.8806C4 21.411 4.21071 21.9198 4.58579 22.2948C4.96086 22.6699 5.46957 22.8806 6 22.8806H18C18.5304 22.8806 19.0391 22.6699 19.4142 22.2948C19.7893 21.9198 20 21.411 20 20.8806V8.88062L14 2.88062Z" stroke="#1FC8E1" strokeOpacity="0.65" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2.88062V8.88062H20" stroke="#1FC8E1" strokeOpacity="0.65" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 13.8806H8" stroke="#1FC8E1" strokeOpacity="0.65" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17.8806H8" stroke="#1FC8E1" strokeOpacity="0.65" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 9.88062H9H8" stroke="#1FC8E1" strokeOpacity="0.65" strokeLinecap="round" strokeLinejoin="round"/>
        </S.icons.active>
    ),
    inactive: (
        <S.icons.inactive width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2.88062H6C5.46957 2.88062 4.96086 3.09133 4.58579 3.4664C4.21071 3.84147 4 4.35018 4 4.88062V20.8806C4 21.411 4.21071 21.9198 4.58579 22.2948C4.96086 22.6699 5.46957 22.8806 6 22.8806H18C18.5304 22.8806 19.0391 22.6699 19.4142 22.2948C19.7893 21.9198 20 21.411 20 20.8806V8.88062L14 2.88062Z" stroke="white" strokeOpacity="0.65" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2.88062V8.88062H20" stroke="white" strokeOpacity="0.65" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 13.8806H8" stroke="white" strokeOpacity="0.65" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17.8806H8" stroke="white" strokeOpacity="0.65" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 9.88062H9H8" stroke="white" strokeOpacity="0.65" strokeLinecap="round" strokeLinejoin="round"/>
        </S.icons.inactive>
    ),
    editing: (
        <S.icons.editing width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4.68555" r="4" fill="#1FC8E1"/>
        </S.icons.editing>
    ),
    saving: (
        <S.icons.saving width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.72796 12.5C7.0041 12.5 7.22796 12.2761 7.22796 12C7.22796 11.7239 7.0041 11.5 6.72796 11.5V12.5ZM6.72796 1L6.73143 0.5H6.72796V1ZM11.4394 7.43558C11.4037 7.70941 11.5968 7.96029 11.8706 7.99594C12.1445 8.03159 12.3954 7.8385 12.431 7.56467L11.4394 7.43558ZM6.72796 11.5C3.8213 11.5 1.5 9.24248 1.5 6.5H0.5C0.5 9.83265 3.30768 12.5 6.72796 12.5V11.5ZM1.5 6.5C1.5 3.75752 3.8213 1.5 6.72796 1.5V0.5C3.30768 0.5 0.5 3.16735 0.5 6.5H1.5ZM6.72449 1.49999C8.10469 1.50956 9.39878 2.07832 10.2879 3.08833C11.1723 4.09284 11.6829 5.56502 11.4394 7.43558L12.431 7.56467C12.7082 5.43522 12.1304 3.66785 11.0385 2.42756C9.95148 1.19276 8.38159 0.511459 6.73143 0.500012L6.72449 1.49999Z" fill="#1FC8E1"/>
        </S.icons.saving>
    ),
    saved: (
        <S.icons.saved width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L4.75 9.25L1 5.5" stroke="#1FC8E1" strokeLinecap="round" strokeLinejoin="round"/>
        </S.icons.saved>
    ),
    delete: (
        <S.icons.delete width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 0.880615L9.18 8.56061M9.5 0.880615L1.82 8.56061" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </S.icons.delete>
    )
}

export { File }