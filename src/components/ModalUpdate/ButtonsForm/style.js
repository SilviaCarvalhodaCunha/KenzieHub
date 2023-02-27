import styled from "styled-components"

export const ButtonsStyled = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  
  button{
    font-size: var(--font-15);
    font-weight: var(--weight-2);
    color: var(--white);
    padding: 0.512rem 1.784rem;
    border-radius: var(--radius);
  }

  button:nth-child(1){
    background-color: var(--color-primary-Negative);
    width: 60%;
  }

  button:nth-child(1):hover{
    background-color: var(--color-primary);
  }

  button:nth-child(2){
    background-color: var(--gray-1);
  }

  button:nth-child(2):hover{
    background-color: var(--gray-0);
    color: var(--gray-1);
  }
`