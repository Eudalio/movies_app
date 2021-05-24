import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    
    font-family: 'Marvel', sans-serif;
    
    body::-webkit-scrollbar {
      width: 4px;
    } 

    body::-webkit-scrollbar-thumb {   
      background-color: #c01f1E;   
    }

    body::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
    }
  }
`;