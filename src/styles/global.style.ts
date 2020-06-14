import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
     
  }
  html,body{
    height:100%;
    min-height:100%;
  }
  body{ 
    background:#f9f9f9
  }
  #root{
    height:100%;
    display:flex;
    flex-direction:column;
  }
  main{
    flex:1;
  }
`;
