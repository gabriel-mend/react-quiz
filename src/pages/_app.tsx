import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

import db from '../../db.json'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }: any) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="https://cdn.auth0.com/blog/react-js/react.png" />
        <link rel="apple-touch-icon" href="https://cdn.auth0.com/blog/react-js/react.png" />
      </Head>
      <NextSeo
        title="React Quiz"
        description="Desafie e responda perguntas sobre o ecosistema React!"
        canonical="https://reactquiz.vercel.app"
      />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}