import styled from 'styled-components';

export const Container = styled.div`
  height: 18rem;
  margin-top: 24px;
  border-radius: 4px;

  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};

  img {
    height: 50%;
    width: 100%;
    border-radius: 4px 4px 0 0;
  }

  @media (max-width: 700px) {
    width: 15rem;
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 22px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  margin-top: 8px;
`;
