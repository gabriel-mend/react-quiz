import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import db from '../../db.json'
import { GlobalStyle } from '../styles/global'

const theme = db.theme;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="https://cdn.auth0.com/blog/react-js/react.png" />
        <link rel="apple-touch-icon" href="https://cdn.auth0.com/blog/react-js/react.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
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