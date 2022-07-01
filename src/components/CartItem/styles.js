import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 12px;

  img {
    border-radius: 4px;
    height: 12rem;
    width: 14rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 8px;
  width: 100%;

  > strong {
    margin-bottom: 12px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 12px;
  }

  @media (max-width: 700px) {
    margin: 0;
  }
`;
