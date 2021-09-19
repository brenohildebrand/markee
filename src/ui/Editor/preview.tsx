import React from 'react';
import styled from 'styled-components';

type PreviewProps = {
    markedContent: string
}

function Preview ({ markedContent }: PreviewProps) {
    return <S.div dangerouslySetInnerHTML={{ __html: markedContent}}></S.div> 
}

const S = {
    div: styled.div`
        flex: 5;

        width: 100%;
        height: 100%;

        font-size: 2rem;

        padding-left: 5rem;
        border-left: 1px solid rgba(30, 41, 59, 0.12);
    `,
}

export { Preview }