import type {AppProps} from 'next/app'
import {createGlobalStyle} from 'styled-components'
import { COLORS } from '../constants'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp

const GlobalStyles = createGlobalStyle`
  :root {
    --color-background: ${COLORS.dark.background};
    --color-text: ${COLORS.dark.text};

    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    color: var(--color-text);
    background-color: var(--color-background);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
