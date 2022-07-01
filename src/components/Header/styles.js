import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  height: 25%;
  padding: 24px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  h1 {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    img {
      height: 50px;
      width: 50px;
      margin-left: 8px;
    }
  }

  @media (max-width: 700px) {
    justify-content: space-between;

    h1 {
      display: none;
    }
  }
`;

export const UserInfos = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    strong {
      font-size: 0.95rem;
    }

    span {
      font-size: 0.8rem;
    }
  }

  img {
    height: 45px;
    width: 45px;

    border-radius: 4px;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    cursor: pointer;
    margin-left: 12px;
  }
`;

export const ShoppingCartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    position: relative;
  }

  div {
    position: absolute;
    background: ${({ theme }) => theme.colors.green};

    display: flex;
    align-items: center;
    justify-content: center;

    height: 18px;
    width: 18px;
    border-radius: 50%;

    font-size: 12px;
    margin-top: 18px;
    margin-left: 32px;
  }
`;
