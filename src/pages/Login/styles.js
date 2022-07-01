import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  height: 100vh;
  width: 100%;

  h1 {
    display: flex;
    align-items: center;

    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.primary};

    img {
      height: 50px;
      width: 50px;
      margin-left: 8px;
    }
  }
`;

export const SignInContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: auto;

  width: 60%;
  height: 300px;

  background: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.div`
  height: 100%;
  width: 40%;
  background-size: cover;
  background-image: url('https://www.tricurioso.com/wp-content/uploads/2019/09/verduras-e-legumes-tricurioso7.jpg');

  @media (max-width: 800px) {
    display: none;
  }
`;

export const LoginErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-top: 16px;
  font-size: 0.75rem;
`;
