import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;

  button{
    font-size: var(--font-10);
    font-weight: var(--weight-2);
    color: var(--white);
    background-color: var(--color-primary-Negative);
    border-radius: var(--radius);
    padding: 0.512rem 0;


    :hover{
      background-color: var(--color-primary);
    }
  }
`