import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { BudgetContext } from '../contexts/budget';
import CategoryEditModal from './categoryeditmodal'; // Import the modal component

const CategoryList = () => {
  const { categories, setCategories } = useContext(BudgetContext);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // Track the selected category
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('https://digistar-demo-be.vercel.app/api/categories');
      setCategories(response.data.data);
    };
    fetchCategories();
  }, [setCategories]);

  const handleEdit = (id) => {
    setSelectedCategoryId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ul>
        {categories.map((category) => (
          <li key={category._id} style={{ display: 'flex', alignItems: 'center' }}>
            {category.name} - {category.wallet ? category.wallet.name : ''}
            <button
              className="btn btn-secondary btn-sm" style={{ marginLeft: '43rem' }}
              onClick={() => handleEdit(category._id)}
              aria-label="Edit"
            >
              Edit
            </button>
            <button className='btn btn-danger btn-sm' onClick={() => deleteCategory(category._id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Render the edit modal */}
      <CategoryEditModal show={showModal} handleClose={handleCloseModal} categoryId={selectedCategoryId} />
    </>
  );
};

export default CategoryList;
