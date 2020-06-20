import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/authContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};
export default App;
