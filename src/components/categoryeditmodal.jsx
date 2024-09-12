import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { BudgetContext } from '../contexts/budget';

const CategoryEditModal = ({ show, handleClose, categoryId }) => {
  const { setCategories } = useContext(BudgetContext);
  const [category, setCategory] = useState({ name: '', wallet: {} });

  useEffect(() => {
    if (categoryId) {
      const fetchCategory = async () => {
        const response = await axios.get(`https://digistar-demo-be.vercel.app/api/categories/${categoryId}`);
        setCategory(response.data.data);
      };
      fetchCategory();
    }
  }, [categoryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    await axios.put(`https://digistar-demo-be.vercel.app/api/categories/${categoryId}`, category);
    const response = await axios.get('https://digistar-demo-be.vercel.app/api/categories');
    setCategories(response.data.data);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCategoryName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={category.name}
              onChange={handleChange}
              placeholder="Enter category name"
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

export default CategoryEditModal;
