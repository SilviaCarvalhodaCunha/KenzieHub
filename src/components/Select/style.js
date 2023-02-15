import styled from "styled-components";

export const FieldsetStyled = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 18px;

  label {
    font-size: var(--font-6);
    font-weight: var(--weight-1);
    color: var(--gray-0);
  }

  select {
    width: 100%;
    font-size: var(--font-7);
    padding: 0.526rem 0 0.526rem 0.814rem;
    border-radius: var(--radius);
    outline: none;
    background-color: var(--gray-2);
    border: none;
    color: var(--gray-1);

    :focus{
      border: 1px solid var(--gray-0);
    }
  
    option{
      color: var(--gray-0);
    }
  }

`;