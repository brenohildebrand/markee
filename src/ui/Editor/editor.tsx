import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Preview } from "./preview";
import { Raw } from "./raw";
import { Title } from "./title";

import marked from 'marked'
import 'highlight.js/styles/github.css'

import('highlight.js').then(lib => {
    const hljs = lib.default

    marked.setOptions({
        highlight: (code, language) => {
            if(language && hljs.getLanguage(language)){
                return hljs.highlight(code, { language }).value
            }

            return hljs.highlightAuto(code).value
        }
    })
})

type EditorProps = {
    activeFile: MarkeeFile
}

function Editor ({ activeFile }: EditorProps) {
    const [content, setContent] = useState('')

    const handleRawChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }

    return (
        <S.div>
            <S.header>
                <Title value={activeFile.name}/>
            </S.header>
            <S.main>
                <Raw 
                    content={content}
                    handleChange={handleRawChange}
                />
                <Preview markedContent={marked(content)}/>
            </S.main>
        </S.div>
    )
}

const S = {
    div: styled.div`
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
    `,
    header: styled.header`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    `,
    main: styled.main`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 100%;
    `,
}

export { Editor }