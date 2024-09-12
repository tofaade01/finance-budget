import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { BudgetContext } from '../contexts/budget';

const CategoryForm = () => {
  const { setCategories } = useContext(BudgetContext);
  const [category, setCategory] = useState('');
  const [walletId, setWalletId] = useState(''); // Track selected wallet
  const [wallets, setWallets] = useState([]);   // Track available wallets for selection

  // Fetch wallets on component mount
  useEffect(() => {
    const fetchWallets = async () => {
      const response = await axios.get('https://digistar-demo-be.vercel.app/api/wallets');
      setWallets(response.data.data); // Set wallets from API response
    };
    fetchWallets();
  }, []);
  const addCategory = async (e) => {
    e.preventDefault();
    const response = await axios.post('https://digistar-demo-be.vercel.app/api/categories', { 
      name: category,
      wallet: walletId, // Include selected walletId in the request body
    });
    setCategories((prev) => [...prev, response.data.data]); // Assuming the response has category data in "data"
    setCategory(''); // Reset form fields
    setWalletId(''); // Reset selected wallet
  };

  return (
    <form onSubmit={addCategory}>
      <div>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Add new category"
        />
      </div>
      
      <div>
        <select value={walletId} onChange={(e) => setWalletId(e.target.value)}>
          <option value="">Select Wallet</option>
          {wallets.map((wallet) => (
            <option key={wallet._id} value={wallet.name}>
              {wallet.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
  