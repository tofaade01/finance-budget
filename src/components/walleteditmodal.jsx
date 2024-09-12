import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { BudgetContext } from '../contexts/budget';

const WalletEditModal = ({ show, handleClose, walletId }) => {
  const { setWallets } = useContext(BudgetContext);
  const [wallet, setWallet] = useState({ name: '', balance: 0 });
  useEffect(() => {
    if (walletId) {
      const fetchWallet = async () => {
        const response = await axios.get(`https://digistar-demo-be.vercel.app/api/wallets/${walletId}`);
        setWallet(response.data.data); // Fetch the wallet details for the given walletId
      };
      fetchWallet();
    }
  }, [walletId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWallet((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    await axios.put(`https://digistar-demo-be.vercel.app/api/wallets/${walletId}`, wallet);
    // Fetch updated wallet list after saving changes
    const response = await axios.get('https://digistar-demo-be.vercel.app/api/wallets');
    setWallets(response.data.data);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Wallet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formWalletName">
            <Form.Label>Wallet Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={wallet.name}
              onChange={handleChange}
              placeholder="Enter wallet name"
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

export default WalletEditModal;
