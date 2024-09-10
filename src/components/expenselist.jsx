import { useEffect, useContext } from 'react';
import axios from 'axios';
import { BudgetContext } from '../contexts/budget';

const ExpenseList = () => {
  const { expenses, setExpenses } = useContext(BudgetContext);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await axios.get('https://digistar-demo-be.vercel.app/api/expense-items');
      setExpenses(response.data.data);
      console.log(response.data.data);
    };
    fetchExpenses();
  }, [setExpenses]);

  const deleteExpense = async (id) => {
    await axios.delete(`https://digistar-demo-be.vercel.app/api/expense-items/${id}`);
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  if (!Array.isArray(expenses)) {
    return <p>Loading...</p>; // Display loading while fetching or if expenses is not an array
  }

  return (
    <ul className="list-group">
      {expenses.length === 0 ? (
        <li className="list-group-item">No expenses found.</li>
      ) : (
        expenses.map((expense) => (
          <li key={expense.id} className="list-group-item d-flex justify-content-between align-items-center">
            {expense.category.name} - {expense.title} - {expense.flowType} - ${expense.amount}
            <button className="btn btn-danger btn-sm" onClick={() => deleteExpense(expense.id)}>
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default ExpenseList;
