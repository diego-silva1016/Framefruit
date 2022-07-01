import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0.8rem;

  > span {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 700px) {
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    cursor: pointer;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  margin-bottom: 8px;
`;
