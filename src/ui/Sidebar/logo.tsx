import React from "react";
import styled, { css } from "styled-components";
import logoImage from '../../assets/logo192.png'

function Logo () {

    return (
        <Div>
            <Img src={logoImage}></Img>
            <P>markee<Span>.</Span></P>
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    width: 3.6rem;
    height: auto;
`

const P = styled.p`${ ({ theme }) => css`
    font-size: 3.38401rem;
    font-weight: bold;
    line-height: 4.4rem;

    color: ${theme.colors.white};
`}`

const Span = styled.span`${ ({ theme }) => css`
    color: ${theme.colors.primary}
`}`

export { Logo }