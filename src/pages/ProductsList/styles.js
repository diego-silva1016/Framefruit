import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0.8rem;

  @media (max-width: 700px) {
    align-items: center;
  }
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 15rem);
  grid-gap: 1.5rem;

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
