import React, { ChangeEvent, RefObject } from "react";
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
    activeFile: MarkeeFile | undefined
    inputRef: RefObject<HTMLInputElement>
    actions: {
        createFile: (file?: Partial<MarkeeFile>) => void
        readFile: (ID: string) => void
        updateFile: (file: MarkeeFile) => void
        deleteFile: (ID: string) => void
    }
}

function Editor ({ activeFile, inputRef, actions }: EditorProps) {
    /*
        If the active file is undefined, the editor will use default
        values for the title and for the content. At the first time 
        they receive changes, a fresh new file is automatically created.
    */
    const { createFile, updateFile } = actions

    const handleRawOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(activeFile === undefined) createFile({ name: 'Untitled', content: e.target.value, status: 'editing' })
        else updateFile({
            ...activeFile,
            content: e.target.value
        })
    }

    const handleTitleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(activeFile === undefined) createFile({ name: e.target.value, content: '', status: 'editing' })
        else updateFile({
            ...activeFile,
            name: e.target.value
        })
    }

    return (
        <S.div>
            <S.header>
                <Title inputRef={inputRef} value={activeFile?.name ?? 'Untitled'} onChange={handleTitleOnChange}/>
            </S.header>
            <S.main>
                <Raw 
                    content={activeFile?.content ?? ''}
                    handleOnChange={handleRawOnChange}
                />
                <Preview markedContent={marked(activeFile?.content ?? '')}/>
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