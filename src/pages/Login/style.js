import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin-top: 81px;
  display: flex;
  justify-content: center;
`

export const MainContainer = styled.main`
  padding: 0 1rem;
  margin-top: 19.5px;

  @media (min-width: 769px){
    display: flex;
    justify-content: center;
  }

`

export const DivStyled = styled.div`
  background-color: var(--gray-3);
  border-radius: var(--radius);
  padding: 2.106rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  h2{
    font-size: var(--font-2);
    font-weight: var(--weight-4);
    color: var(--gray-0);
  }

  p{
    font-size: var(--font-4);
    font-weight: var(--weight-3);
    color: var(--gray-1);
  }

  a{
    width: 100%;
    font-size: var(--font-5);
    font-weight: var(--weight-2);
    color: var(--gray-0);
    background-color: var(--gray-1);
    border-radius: var(--radius);
    padding: 0.516rem 0;
    text-align: center;
  }

  @media (min-width: 769px){
    width: 23.063rem;
  }
`