import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { BudgetContext } from '../contexts/budget';
import WalletEditModal from './walleteditmodal';

const WalletList = () => {
  const { wallets, setWallets } = useContext(BudgetContext);
  const [selectedWalletId, setSelectedWalletId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchWallets = async () => {
      const response = await axios.get('https://digistar-demo-be.vercel.app/api/wallets');
      setWallets(response.data.data);
      console.log(response.data.data)
    };
    fetchWallets();
  }, [setWallets]);

  const handleShowModal = (id) => {
    setSelectedWalletId(id); // Set the walletId here correctly
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedWalletId(null);
    setShowModal(false);
  };

  const deleteWallet = async (id) => {
    await axios.delete(`https://digistar-demo-be.vercel.app/api/wallets/${id}`);
    setWallets(wallets.filter((wallet) => wallet.id !== id));
  };

  return (
    <>
      <ul style={{ marginTop: '1rem' }} className="list-group">
        {wallets.map((wallet) => (
          <li key={wallet._id} className="list-group-item d-flex justify-content-between align-items-center">
            {wallet.name} - 
            <ul>
              {wallet.expenseItems.map((expense) => (
                <li key={expense._id}>
                  ${expense.amount}
                </li>
              ))}
            </ul>
            <button
              className='btn btn-secondary btn-sm'
              onClick={() => handleShowModal(wallet._id)} 
              aria-label='Edit'
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteWallet(wallet._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <WalletEditModal
        show={showModal}
        handleClose={handleCloseModal}
        walletId={selectedWalletId} 
      />
    </>
  );
};

export default WalletList;
