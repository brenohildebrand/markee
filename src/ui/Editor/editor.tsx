import React from "react";
import styled, { css } from "styled-components";
import { Preview } from "./preview";
import { Raw } from "./raw";
import { Title } from "./title";

function Editor () {
    return (
        <Div>
            <Header>
                <Title/>
            </Header>
            <Main>
                <Raw/>
                <Preview>
                    LoremIpsum Together!
                </Preview>
            </Main>
        </Div>
    )
}

const Div = styled.div`${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    flex: 7.7;

    width: 100%;
    height: 100%;

    padding: 5rem;
    background-color: #F9FBFF;
`}`

const Header = styled.header`${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`}`

const Main = styled.main`${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
`}`


export { Editor }