import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;    
`

export const ContainerModal = styled.div`
  width: 90%;
  background-color: var(--gray-3);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;

  div{
    width: 100%;
    padding: 0.625rem 1rem ;
    border-radius: var(--radius) var(--radius) 0 0;
    background-color: var(--gray-2);
    display: flex;
    justify-content: space-between;
    
    h2{
      font-size: var(--font-12);
      font-weight: var(--weight-4);
      color: var(--gray-0);
    }

    button{
      font-size: var(--font-5);
      font-weight: var(--weight-3);
      color: var(--gray-1);
      background-color: transparent;
    }
  }

  @media (min-width: 769px){
    width: 30%;
  }
`