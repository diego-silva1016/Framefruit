import { ThemeProvider } from 'styled-components';
import ContextsProviders from './contexts';
import Routes from './routes/routes';
import Theme from './styles/theme';

function App() {
  return (
    <ContextsProviders>
      <ThemeProvider theme={Theme}>
        <Routes />
      </ThemeProvider>
    </ContextsProviders>
  );
}

export default App;
