import * as React from 'react';
import GlobalStyle from './styles/globalStyle';
import Main from './pages/Main';
import Header from './containers/Header';
import RootProvider from './providers';

export const App = () => {
  return (
    <RootProvider>
      <GlobalStyle />
      <Header />
      <Main />
    </RootProvider>
  );
};
