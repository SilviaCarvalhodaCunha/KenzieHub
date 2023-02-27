import styled from "styled-components";

export const HrStyled = styled.hr`
  border-color: var(--gray-3);
  height: 1px;
`;

export const HeaderContainer = styled.header`
  div {
    padding: 26px 13px;
    display: flex;
    justify-content: space-between;

    a {
      font-size: var(--font-9);
      font-weight: var(--weight-3);
      color: var(--gray-0);
      background-color: var(--gray-3);
      border-radius: var(--radius);
      padding: 0.28rem 1.611rem;
    }

    a:hover{
      background-color: var(--gray-2);
    }

    @media (min-width: 769px) {
      width: 70%;
    }
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MainContainer = styled.main`
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SectionProfile = styled.section`
  padding: 35.5px 13px;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  h2 {
    font-size: var(--font-11);
    font-weight: var(--weight-4);
    color: var(--gray-0);
  }

  p {
    font-size: var(--font-3);
    font-weight: var(--weight-1);
    color: var(--gray-1);
  }

  @media (min-width: 769px) {
    width: 70%;
  }
`;

export const SectionTechnology = styled.section`
  padding: 35.5px 13px;

  @media (min-width: 769px) {
    width: 70%;
  }
`;

export const DivSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: var(--font-1);
    font-weight: var(--weight-3);
    color: var(--gray-0);
  }

  button {
    background: transparent;
  }

  @media (min-width: 769px) {
    img:hover {
      transform: scale(1.2);
      transition: transform 0.2s ease-in-out;
    }
  }
`;
