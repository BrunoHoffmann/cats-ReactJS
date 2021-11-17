import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyle from './styles/global';
import AppProvider from './hooks/index';
import Header from './components/Header';

const App: React.FC = () => (
  <div className="app">
    <Router>
      <AppProvider>
        <Header />
        <div className="app_body">
          <Routes />
          <ToastContainer />
        </div>
      </AppProvider>
      <GlobalStyle />
    </Router>
  </div>
);

export default App;
