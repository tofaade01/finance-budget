import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BudgetProvider } from './contexts/budget';  // Import the provider

ReactDOM.render(
  <BudgetProvider>
    <App />
  </BudgetProvider>,
  document.getElementById('root')
);
