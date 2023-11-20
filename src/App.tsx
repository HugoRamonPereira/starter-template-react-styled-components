import { ThemeProvider } from 'styled-components';
import { Button } from './components/button';
import { globalTheme } from './styles/theme/globalTheme';

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <h1>Starter Template React + Styled Components</h1>
      <Button />
    </ThemeProvider>
  );
}

export default App;
