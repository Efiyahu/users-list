import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StylesProvider from '../styles/Provider';
import store from '@src/store';
import { NativeBaseProvider } from 'native-base';

const Providers = ({ children }: React.PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store}>
          <StylesProvider>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </StylesProvider>
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default Providers;
