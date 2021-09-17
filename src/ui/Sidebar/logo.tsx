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

    margin-bottom: 4.2rem;
`

const Img = styled.img`
    width: 7rem;
    height: auto;

    margin-right: 1rem;
`

const P = styled.p`${ ({ theme }) => css`
    font-size: 4.6rem;
    font-weight: bold;
    line-height: 4.4rem;

    color: ${theme.colors.white};
`}`

const Span = styled.span`${ ({ theme }) => css`
    color: ${theme.colors.primary}
`}`

export { Logo }