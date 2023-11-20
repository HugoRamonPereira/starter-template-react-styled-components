import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

// Use this theme in the main File, in this case the App.tsx
// To use this theme we need to wrap our application with the theme provider from styled-components
// And pass in the prop theme out global theme.

interface ThemeProps extends PropsWithChildren{}

const globalTheme = {
  primary: 'purple',
  secondary: 'fuchsia',
  white: '#FFFFFF'
};

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={globalTheme}>
    {children}
  </ThemeProvider>
);

export default Theme;