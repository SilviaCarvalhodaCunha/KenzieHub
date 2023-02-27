import styled from "styled-components";

export const DivTechnology = styled.div`
  margin-top: 1.75rem;

  ul{
    width: 100%;
    padding: 1.375rem 0;
    background-color: var(--gray-3);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    

    li{
      width: 90%;
      padding: 0.761rem;
      background-color: var(--gray-4);
      border-radius: var(--radius);
      display: flex;
      justify-content: space-between;
      cursor: pointer;

      h2{
        font-size: var(--font-13);
        font-weight: var(--weight-4);
        color: var(--gray-0);
      }

      p{
        font-size: var(--font-14);
        font-weight: var(--weight-1);
        color: var(--gray-1);
      }
    }
    
    li:hover{
      background-color: var(--gray-2);
      
      p{
        color: var(--gray-0);
      }
    }

  }

  p{
    font-size: var(--font-3);
    font-weight: var(--weight-1);
    color: var(--gray-1);
  }
`