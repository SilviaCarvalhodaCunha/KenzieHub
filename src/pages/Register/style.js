import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 57.45px 16px 38.69px 16px;
  
  div {
    display: flex;
    justify-content: space-between;

    @media (min-width: 769px) {
      width: 370px;
    }
  }

  button {
    font-size: var(--font-9);
    font-weight: var(--weight-3);
    color: var(--gray-0);
    background-color: var(--gray-3);
    border-radius: var(--radius);
    padding: 0.28rem 1.611rem;
  }

  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
  }
`;

export const MainContainer = styled.main`
  padding: 12px;

  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
  }
`;

export const DivStyled = styled.div`
  background-color: var(--gray-3);
  border-radius: var(--radius);
  padding: 2.099rem 1rem 1.248rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19.59px;

  h2 {
    font-size: var(--font-8);
    font-weight: var(--weight-4);
    color: var(--gray-0);
  }

  p {
    font-size: var(--font-9);
    font-weight: var(--weight-1);
    color: var(--gray-1);
  }

  @media (min-width: 769px) {
    width: 23.125rem;
  }
`;
