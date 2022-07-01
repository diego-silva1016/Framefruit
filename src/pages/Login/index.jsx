import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Input from '../../components/Input';
import { Container, SignInContainer, Image, LoginErrorMessage } from './styles';
import Logo from '../../assets/logo.png';
import { useAuth } from '../../contexts/auth';
import schemaValidation from './validation';

function Login() {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const login = data => {
    setLoginError(false);

    try {
      signIn(data);
    } catch (err) {
      setLoginError(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schemaValidation,
    validateOnChange: false,
    onSubmit: login,
  });

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  return (
    <Container>
      <SignInContainer onSubmit={formik.handleSubmit}>
        <h1>
          FrameFruit <img src={Logo} alt="Logo" />
        </h1>
        <Input
          id="email"
          type="email"
          label="Email"
          name="email"
          onChange={formik.handleChange}
          errorMessage={formik.errors.email}
        />

        <Input
          id="password"
          type="password"
          name="password"
          label="Senha"
          marginTop="22px"
          onChange={formik.handleChange}
          errorMessage={formik.errors.password}
        />

        {loginError && (
          <LoginErrorMessage>
            Email e/ou Senha estão incorretos.
          </LoginErrorMessage>
        )}

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{ marginTop: '22px', width: '17rem' }}
        >
          Entrar
        </Button>
      </SignInContainer>
      <Image />
    </Container>
  );
}

export default Login;
