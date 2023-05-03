import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './theme';

const StylesProvider = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StylesProvider;
