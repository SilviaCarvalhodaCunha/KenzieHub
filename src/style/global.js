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
    background-color:  var(--gray-4);
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
    --font-2: 0.902rem; /* 14.439px */ 
    --font-3: 0.75rem; /* 12px */
    --font-4: 0.602rem; /* 9.62602px */
    --font-5: 0.802rem; /* 12.8347px */
    --font-6: 0.611rem; /* 9.772px */
    --font-7: 0.814rem; /* 13.0293px */
    --font-8: 0.899rem; /* 14.3916px */
    --font-9: 0.6rem; /* 9.59437px */
    --font-10: 0.8rem; /* 12.7925px */
    --font-11: 1.125rem; /* 18px */
    --font-12: 0.702rem; /* 11.2304px */
    --font-13: 0.888rem; /* 14.2123px */
    --font-14: 0.761rem; /* 12.182px */
    --font-15: 0.799rem; /* 12.7913px */

    --weight-1: 400;
    --weight-2: 500;
    --weight-3: 600; 
    --weight-4: 700;   
    
    --radius: 4px;   
}
`;
