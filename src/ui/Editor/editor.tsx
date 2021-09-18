import React from "react";
import styled, { css } from "styled-components";
import { Preview } from "./preview";
import { Raw } from "./raw";
import { Title } from "./title";

type EditorProps = {
    activeFile: MarkeeFile
}

function Editor ({ activeFile }: EditorProps) {
    return (
        <S.div>
            <S.header>
                <Title value={activeFile.name}/>
            </S.header>
            <S.main>
                <Raw/>
                <Preview>
                    {activeFile.content}
                </Preview>
            </S.main>
        </S.div>
    )
}

const S = {
    div: styled.div`${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        flex: 7.7;

        width: 100%;
        height: 100%;

        padding: 5rem;
        background-color: #F9FBFF;

        @media only screen and (min-width: 1440px) {
            flex: 8.6;
        }
    `}`,
    header: styled.header`${({ theme }) => css`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    `}`,
    main: styled.main`${({ theme }) => css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 100%;
    `}`
}

export { Editor }