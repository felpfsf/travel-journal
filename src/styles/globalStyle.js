import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    background-color: #F5F5F5;
    /* overflow: overlay; */
  }

  a {
    text-decoration: none;
    padding: 0;
    color: #918E9B;
  }
`
