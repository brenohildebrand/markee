import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type PreviewProps = {
    children: ReactNode
}

function Preview ({ children }: PreviewProps) {
    return <Div>{children}</Div>
    
}

const Div = styled.div`${({ theme }) => css`
    
`}`

export { Preview }