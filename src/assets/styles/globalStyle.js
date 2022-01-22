import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
//import ImageBg from '../images/bg_4.jpg'

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        outline: 0;
        -webkit-font-smoothing: antialiased;
    }

    body{
        
        background-size: cover;
        background-color: #000;
    }

`
//background: url(${ImageBg}) no-repeat fixed;

export default GlobalStyle