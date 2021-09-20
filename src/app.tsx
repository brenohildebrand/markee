import React from 'react'
import styled from 'styled-components'
import { Sidebar } from '@ui/Sidebar/sidebar'
import { Editor } from '@ui/Editor/editor'
import { useFiles } from '@hooks/useFiles'

function App (): JSX.Element {
	const { files, actions, inputRef } = useFiles()

	return (
		<S.div>
			<Sidebar 
				files={files} 
				actions={actions}
			/>
			<Editor 
				activeFile={files.find(file => file.active) ?? undefined}
				inputRef={inputRef} 
				actions = {actions}
			/>
		</S.div>
	)
}

const S = {
	div:  styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    max-width: 100%;

    height: 100%;
    max-height: 100%;
  `
}

export { App }