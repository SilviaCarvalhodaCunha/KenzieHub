import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    line-height: 150%;
}

button{
    border: none;
    cursor: pointer;
}

body{
    font-family: 'Inter', sans-serif;
}
`;

export const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #FF577F;
    --color-primary-Focus: #FF427F;
    --color-primary-Negative: #59323F;

    --gray-4: #121214;
    --gray-3: #212529;
    --gray-2: #343B41;
    --gray-1: #868E96;
    --gray-0: #F8F9FA;
    --white: #FFFFFF;

    --sucess: #3FE864;
    --negative: #E83F5B;

    --font-1: 1rem; /* 16px */    
    --font-2: 0.75rem; /* 12px */

    --weight-1: 400;
    --weight-2: 500;
    --weight-3: 600; 
    --weight-4: 700;   
    
    --radius: 4px;   
}
`;
