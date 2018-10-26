import { createGlobalStyle } from 'styled-components';
import monsterat from '../../assets/fonts/montserrat/Montserrat-Medium.ttf';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: monsterat;
        src: url(${monsterat});
    }
    
    html, body {
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: #F2F2F2;
        font-family: monsterat;
    }

    h1 {
        font-size: 1.8em;
        letter-spacing: 0.9px;
        line-height: 1.9em;
    }
    h2 {
        font-size: 1.6em;
        letter-spacing: 0.9px;
        line-height: 1.7em;
    }
    h3 {
        font-size: 1.5em;
        letter-spacing: 0.9px;
        line-height: 1.6em;
    }
    h4 {
        font-size: 1.4em;
        letter-spacing: 0.9px;
        line-height: 1.5em;
    }
    h5 {
        font-size: 1.1em;
        letter-spacing: 0.9px;
        line-height: 1.2em;
    }
    h6 {
        font-size: 0.8em;
        letter-spacing: 0.12px;
        line-height: 0.9em;
    }
    p {
        font-size: 1em;
        letter-spacing: 0.9px;
        line-height: 1.1em;
    }

    h1,h2,h3,h4,h5,h6,p {
        margin: 0 0 5px 0;
    }


`;

export default GlobalStyle;
