import React from 'react'
import styled from 'styled-components'

type PreviewProps = {
    markedContent: string
}

function Preview ({ markedContent }: PreviewProps): JSX.Element {
	return <S.div dangerouslySetInnerHTML={{ __html: markedContent}}></S.div> 
}

const S = {
	div: styled.div`
        display: inline-block;

        width: 50%;
        max-width: 50%;
        height: 100%;
        max-height: 100%;

        overflow-y: auto;

        font-size: 1.9rem;

        padding-left: 5rem;
        border-left: 1px solid rgba(30, 41, 59, 0.12);
    `,
}

export { Preview }