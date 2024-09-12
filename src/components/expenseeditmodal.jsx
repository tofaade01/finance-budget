import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { BudgetContext } from '../contexts/budget';

const ExpenseEditModal = ({ show, handleClose, expenseId }) => {
  const { setExpenses } = useContext(BudgetContext);
  const [expense, setExpense] = useState({ title: '', amount: 0, flowType: '', category: {} });

  useEffect(() => {
    if (expenseId) {
      const fetchExpense = async () => {
        const response = await axios.get(`https://digistar-demo-be.vercel.app/api/expense-items/${expenseId}`);
        setExpense(response.data.data);
      };
      fetchExpense();
    }
  }, [expenseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    await axios.put(`https://digistar-demo-be.vercel.app/api/expense-items/${expenseId}`, expense);
    const response = await axios.get('https://digistar-demo-be.vercel.app/api/expense-items');
    setExpenses(response.data.data);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formExpenseTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={expense.title}
              onChange={handleChange}
              placeholder="Enter expense title"
            />
          </Form.Group>
          <Form.Group controlId="formExpenseAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
              placeholder="Enter amount"
            />
          </Form.Group>
          <Form.Group controlId="formExpenseFlowType">
            <Form.Label>Flow Type</Form.Label>
            <Form.Control
              type="text"
              name="flowType"
              value={expense.flowType}
              onChange={handleChange}
              placeholder="Enter flow type"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExpenseEditModal;
