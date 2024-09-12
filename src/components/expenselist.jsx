import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { BudgetContext } from '../contexts/budget';
import ExpenseEditModal from './expenseeditmodal'; // Import the modal component

const ExpenseList = () => {
  const { expenses, setExpenses } = useContext(BudgetContext);
  const [selectedExpenseId, setSelectedExpenseId] = useState(null); // Track the selected expense
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await axios.get('https://digistar-demo-be.vercel.app/api/expense-items');
      setExpenses(response.data.data);
    };
    fetchExpenses();
  }, [setExpenses]);

  const handleEdit = (id) => {
    setSelectedExpenseId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ul className="list-group">
        {expenses.map((expense) => (
          <li key={expense.id} className="list-group-item d-flex justify-content-between align-items-center">
            {expense.category.name} - {expense.title} - {expense.flowType} - ${expense.amount}
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => handleEdit(expense.id)}
              aria-label="Edit"
            >
              Edit
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => deleteExpense(expense.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Render the edit modal */}
      <ExpenseEditModal show={showModal} handleClose={handleCloseModal} expenseId={selectedExpenseId} />
    </>
  );
};

export default ExpenseList;
