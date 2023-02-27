import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100%;
  padding: 1.25rem 1rem 1.563rem 1rem ;
  display: flex;
  flex-direction: column;
  gap: 21px;

  button{
    font-size: var(--font-5);
    font-weight: var(--weight-2);
    color: var(--white);
    width: 100%;
    padding: 0.516rem 0;
    background-color: var(--color-primary);
    border-radius: var(--radius);
    text-align: center;    
  }
`