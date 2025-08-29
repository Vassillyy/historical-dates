import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        margin: 0;
        padding: 0;
    }

    body {
        box-sizing: border-box;
        max-width: 1440px;
        margin: 0 auto;
        padding: 0;
        font-family: 'PT Sans', sans-serif;
    }
`
