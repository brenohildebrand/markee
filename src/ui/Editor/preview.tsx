import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type PreviewProps = {
    children: ReactNode
}

function Preview ({ children }: PreviewProps) {
    return <S.div>{children}</S.div> 
}

const S = {
    div: styled.div`${({ theme }) => css`
        flex: 5;

        width: 100%;
        height: 100%;

        padding-left: 5rem;
        border-left: 1px solid rgba(30, 41, 59, 0.12);
        font-size: 2rem;
    `}`
}

export { Preview }