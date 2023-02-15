import styled from "styled-components";

export const FieldsetStyled = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 18px;

  label{
    font-size: var(--font-6);
    font-weight: var(--weight-1);
    color: var(--gray-0);
  }
`

export const DivPassword = styled.div`
  padding: 0.526rem 0.814rem;
  border-radius: var(--radius);
  background-color: var(--gray-2);
  display: flex;
  justify-content: space-between;

  input{
    font-size: var(--font-7);
    outline: none;
    background-color: var(--gray-2);
    border: none;
    color: var(--gray-0);
  }

  :focus{
    border: 1px solid var(--gray-0);
  }
`;
