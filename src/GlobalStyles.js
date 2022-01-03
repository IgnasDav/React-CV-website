import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --green: #97AFA3;
        --white: #F9F9F9;
        --lightGray: #F0F2F2;
        --darkGray: #64646D;
        --black: #000;
        --fontLight: 300;
        --fontMed: 400;
        --fontBold: 700;
        --fontSizeS: 1.6rem;
        --fontSizeM: 2.5rem;
        --fontSizeL: 4rem; 
        --fontSizeXL: 6rem;
        --maxWidth: 180rem; 
    }
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html{
        font-size: 62.5%;
        box-sizing: border-box;
        font-family: "Comfortaa", cursive;

    }
    body{
        display: flex;
        justify-content: center;

    }
    .overflow-hidden{
            overflow: hidden;
        }

`;
