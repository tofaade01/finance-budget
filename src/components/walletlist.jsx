import { useEffect, useContext } from 'react';
import axios from 'axios';
import { BudgetContext } from '../contexts/budget';

const WalletList = () => {
  const { wallets, setWallets } = useContext(BudgetContext);

  useEffect(() => {
    const fetchWallets = async () => {
      const response = await axios.get('https://digistar-demo-be.vercel.app/api/wallets');
      setWallets(response.data.data);
      console.log(response.data.data)
    };
    fetchWallets();
  }, [setWallets]);

  const deleteWallet = async (id) => {
    await axios.delete(`https://digistar-demo-be.vercel.app/api/wallets/${id}`);
    setWallets(wallets.filter((wallet) => wallet.id !== id));
  };

  return (
    <ul style={{ marginTop: '1rem' }} className="list-group">
      {wallets.map((wallet) => (
        <li key={wallet.id} className="list-group-item d-flex justify-content-between align-items-center">
          {wallet.name} - 
          <ul>
            {wallet.expenseItems.map((expense) => (
                <li key={expense.id}>
                    ${expense.amount}
                </li>
            ))}
          </ul>
          <button className="btn btn-danger btn-sm" onClick={() => deleteWallet(wallet.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default WalletList;
