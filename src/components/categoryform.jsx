import { useState, useContext } from 'react';
import axios from 'axios';
import { BudgetContext } from '../contexts/budget';

const CategoryForm = () => {
  const { setCategories } = useContext(BudgetContext);
  const [category, setCategory] = useState('');

  const addCategory = async (e) => {
    e.preventDefault();
    const response = await axios.post('https://digistar-demo-be.vercel.app/api/categories', { name: category });
    setCategories((prev) => [...prev, response.data]);
    setCategory('');
  };

  return (
    <form onSubmit={addCategory}>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Add new category"
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
