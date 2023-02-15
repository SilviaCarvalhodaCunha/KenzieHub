import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;

  button {
    width: 100%;
    font-size: var(--font-5);
    font-weight: var(--weight-2);
    color: var(--white);
    background-color: var(--color-primary-Focus);
    border-radius: var(--radius);
    padding: 0.516rem 0;
  }

  img{
      width: 100%;
      height: 100%;
    }
`;
