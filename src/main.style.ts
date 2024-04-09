import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --bg-color: #1e293b;
        --text-color: #f8fafc
    }

    body {
        font-family: "Archivo", sans-serif;
        background-color: var(--bg-color);
        color: var(--text-color);
        -webkit-font-smoothing: antialiased;
    }
`;
