import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
      ${"" /* Colors */}
        --black: black;
        --white: white;
        --pageColor: #FEFEFE;
        --primary: #653CAD;
        --primaryContrast: #EAE2F8;
        --secondary: #5CB0FF;
        --gray: #9FB3C8;
        --darkGray: #486581;
        --darkGrey: var(--darkGray);
        --grey: var(--gray);
        --lightGray: #F0F4F8;
        --lightGrey: var(--lightGray);
        --red: #A61B1B;
        --redContrast: #FFEEEE;
        ${"" /* TextSizing */}
        font-size: 62.5%;
        --xxs: 1rem;
        --xs: 1.2rem;
        --sm: 1.4rem;
        --normal: 1.6rem;
        --bitMore: 1.8rem;
        --medium: 2rem;
        --mediumBig: 2.4rem;
        --big: 3rem;
        --large: 3.6rem;
        --larger: 4.8rem;
        --huge: 6rem;
        --superHuge: 7.2rem;
        ${"" /* Box Shadows */}
        --bs: 0 1px 10px 5px rgba(217, 226, 236, 1);
        ${"" /* Radius */}
        --pageBorderRadius: 3rem;
        ${"" /* Spacing */}
        --smallLineSpacing: 1rem;
        --normalLineSpacing: 3.6rem;
        --extraLineSpacing: 2rem;
        --xsSpacing: 0.8rem;
        --smSpacing: 1.2rem;
        --medSpacing: 1.6rem;
        --lgSpacing: 2rem;
        --xlSpacing: 2.4rem;
        --xxlSpacing: 3rem;
        --hugeSpacing: 6rem;
        --smBtnSpacing: 1.2rem 2rem;
        --lgBtnSpacing: 1.6rem 3rem;


        --maxWidth: 1000px;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *:focus {
        outline: none;
    }

    body {
        font-family: 'Fira Code', monospace, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 1.6rem;
        margin: left-auto;
        margin-right: auto;
        font-size: var(--normal);
        background-color: #000000;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%23323232' fill-opacity='0.62'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    a,
    a:visited,
    a:focus,
    a:hover {
        text-decoration: none;
        color: var(--primary);
        cursor: pointer;
    }

    ol, ul {
        list-style-type: none;
    }

    button {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        border: none;
    }

    input {
        border:none;
        background-image:none;
        background-color:transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        -webkit-appearance: none;
        box-shadow: none;
    }

    textarea {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-shadow: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        -webkit-appearance: none;
    }

    p {
      font-size: var(--normal);
      line-height: var(--normalLineSpacing);
      margin-bottom: var(--lgSpacing);
    }

    .background-image {
        background-image: url(${BGImage.src});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .getting-smaller {
        font-size: 75%;
    }

    .highlight {
        position: relative;
        background-color: var(--primary);
        padding: var(--xsSpacing) var(--medSpacing);
        transform: skewX(-7deg);
        border-radius: 1rem;
        color: var(--primaryContrast);
    }
`;
