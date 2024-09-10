import { useEffect, useContext } from 'react';
import axios from 'axios';
import { BudgetContext } from '../contexts/budget';

const CategoryList = () => {
  const { categories, setCategories } = useContext(BudgetContext);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('https://digistar-demo-be.vercel.app/api/categories');
      setCategories(response.data.data);
      console.log(response.data.data)
    };
    fetchCategories();
  }, [setCategories]);

  const deleteCategory = async (id) => {
    await axios.delete(`https://digistar-demo-be.vercel.app/api/categories/${id}`);
    setCategories(categories.filter((category) => category.id !== id));
  };
  return (
    <ul>
      {categories.map((category) => (
        <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }} key={category.id}>
          {category.name} - {category.wallet ? category.wallet.name : ''}
          <button onClick={() => deleteCategory(category.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
