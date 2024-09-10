import { useState, useContext } from 'react';
import axios from 'axios';
import { BudgetContext } from '../contexts/budget';

const ExpenseForm = () => {
  const { categories, wallets, setExpenses } = useContext(BudgetContext);
  const [expense, setExpense] = useState({ title: '', amount: 0, wallet: '', category: '', flowType: '' });
  const [error, setError] = useState({});
  const validateForm = () => {
    const newErrors = {};

    if (!expense.title) newErrors.title = 'Title is required';
    if (expense.amount <= 0) newErrors.amount = 'Amount must be greater than zero';
    if (!expense.wallet) newErrors.wallet = 'Wallet is required';
    if (!expense.category) newErrors.category = 'Category is required';
    if (!expense.flowType) newErrors.flowType = 'Flow Type is required';

    return newErrors;
  };
  const addExpense = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    try {
    const response = await axios.post('https://digistar-demo-be.vercel.app/api/expense-items', expense);
    setExpenses((prev) => [...prev, response.data]);
    setExpense({ title: '', amount: 0, wallet: '', category: '', flowType: '' });
    setError({});
  } catch {
    console.error('Error adding expense', error);
  }
};

  return (
    <form onSubmit={addExpense} className="mb-3">
      <div className="form-group">
        <label htmlFor="expenseTitle">Title</label>
        <input
          type="text"
          className={`form-control ${error.title ? 'is-invalid' : ''}`}
          id="expenseTitle"
          value={expense.title}
          onChange={(e) => setExpense({ ...expense, title: e.target.value })}
          placeholder="Enter expense title"
        />
        {error.title && <div className="invalid-feedback">{error.title}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="expenseAmount">Amount</label>
        <input
          type="number"
          className={`form-control ${error.amount ? 'is-invalid' : ''}`}
          id="expenseAmount"
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: parseFloat(e.target.value) })}
          placeholder="Enter expense amount"
        />
        {error.amount && <div className="invalid-feedback">{error.amount}</div>}
      </div>
      <div className="form-group">
      <label htmlFor="expenseWallet">Wallet</label>
        <select
          className={`form-control ${error.wallet ? 'is-invalid' : ''}`}
          id="expenseWallet"
          value={expense.wallet}
          onChange={(e) => setExpense({ ...expense, wallet: e.target.value })}
        >
          <option value="">Select wallet</option>
          {wallets.map((wallet) => (
            <option key={wallet._id} value={wallet._id}>
              {wallet.name}
            </option>
          ))}
        </select>
        {error.wallet && <div className="invalid-feedback">{error.wallet}</div>}
    </div>
      <div className="form-group">
        <label htmlFor="expenseCategory">Category</label>
        <select
          className={`form-control ${error.category ? 'is-invalid' : ''}`}
          id="expenseCategory"
          value={expense.category}
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        >
          <option value="">Select category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        {error.category && <div className="invalid-feedback">{error.category}</div>}
      </div>
      <div className="form-group">
      <label htmlFor="expenseflowType">Flow Type</label>
      <select
          className={`form-control ${error.flowType ? 'is-invalid' : ''}`}
          id="expenseflowType"
          value={expense.flowType}
          onChange={(e) => setExpense({ ...expense, flowType: e.target.value })}
        >
          <option value="" disabled selected>Select Flow Type</option>
          <option value="income">Income</option>
          <option value="outcome">Outcome</option>
        </select>
        {error.flowType && <div className="invalid-feedback">{error.flowType}</div>}
      </div>
      <button type="submit" className="btn btn-primary mt-3">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
