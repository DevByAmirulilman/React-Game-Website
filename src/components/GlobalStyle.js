import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: red;
    }
}
body{
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    background-color: #1E2049;
}
h2{
    font-family: 'Abril Fatface', cursive;
    font-size: 3rem;
    font-weight: lighter;
}
h3{
    font-size: 1.3rem;
}
p{
    font-size: 1.2rem;
    line-height: 200%;
}
a{
    text-decoration: none;
}
img{
    display: block;
}

input{
    font-weight: bold;
    font-family: "Montserrat",sans-serif;
}
` ;
export default GlobalStyle;