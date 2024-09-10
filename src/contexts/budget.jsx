import { createContext, useState } from 'react';

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [wallets, setWallets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  return (
    <BudgetContext.Provider value={{ categories, setCategories, wallets, setWallets, expenses, setExpenses }}>
      {children}
    </BudgetContext.Provider>
  );
};
