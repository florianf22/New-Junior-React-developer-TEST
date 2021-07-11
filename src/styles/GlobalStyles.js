import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    :root {
        --color-text: #1D1F22;
        --color-text-light: #8D8F9A;
        --color-primary: #5ECE7B;
        --color-white: #FFF;
        --color-border: #E5E5E5;
    }

    html {
        box-sizing: border-box;
    }

    body {
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        overflow-x: hidden;
    }
`;
