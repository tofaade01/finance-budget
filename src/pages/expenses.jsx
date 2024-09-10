import ExpenseForm from '../components/expenseform';
import ExpenseList from '../components/expenselist';

const Expenses = () => {
  return (
    <div>
      <h1>Expenses</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
};

export default Expenses;
