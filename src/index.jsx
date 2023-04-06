import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyleComponent } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import OrderProvider from './context/order/OrderProvider';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='react-shop'>
      <ThemeProvider theme={theme}>
        <OrderProvider>
          <App />
        </OrderProvider>
        <GlobalStyleComponent />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
