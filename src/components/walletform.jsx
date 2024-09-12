import { useState, useContext } from 'react';
import axios from 'axios';
import { BudgetContext } from '../contexts/budget';

const WalletForm = () => {
  const { setWallets } = useContext(BudgetContext);
  const [wallet, setWallet] = useState({ name: '', balance: 0 });

  const addWallet = async (e) => {
    e.preventDefault();
    const response = await axios.post('https://digistar-demo-be.vercel.app/api/wallets', wallet);
    setWallets((prev) => [...prev, response.data]);
    setWallet({ name: '', balance: 0 });
  };

  return (
    <form onSubmit={addWallet}>
      <input
        type="text"
        value={wallet.name}
        onChange={(e) => setWallet({ ...wallet, name: e.target.value })}
        placeholder="Wallet name"
      />
      <button type="submit">Add Wallet</button>
    </form>
  );
};

export default WalletForm;
