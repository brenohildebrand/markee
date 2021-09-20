import React from 'react'
import { App } from './app'
import { theme } from './resources/theme'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

function Root (): JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	)
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'DM Sans', sans-serif;
  }

  html,
  body,
  [data-js="app"] {
    width: 100%;
    max-width: 100%;

    height: 100%;
    max-height: 100%;

    overflow: hidden;
  }

  @media only screen and (min-width: 2100px) {
    html {
      font-size: 72%;
    }
  }

  @media only screen and (min-width: 2300px) {
    html {
      font-size: 80%;
    }
  }

  @media only screen and (min-width: 2650px) {
    html {
      font-size: 100%;
    }
  }

  @media only screen and (min-width: 3000px) {
    html {
      font-size: 130%;
    }
  }
`

export { Root }
