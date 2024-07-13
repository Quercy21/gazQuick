// components/CheckoutForm.js
import { useState } from 'react';
import styles from '../styles/CheckoutForm.module.css';

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    ville: '',
    quartier: '',
    nom: '',
    prenom: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Adresse de Livraison</h2>
      <input
        type="text"
        name="ville"
        placeholder="Ville"
        value={formData.ville}
        onChange={handleChange}
      />
      <input
        type="text"
        name="quartier"
        placeholder="Quartier"
        value={formData.quartier}
        onChange={handleChange}
      />
      <input
        type="text"
        name="nom"
        placeholder="Votre nom"
        value={formData.nom}
        onChange={handleChange}
      />
      <input
        type="text"
        name="prenom"
        placeholder="Votre Prenom"
        value={formData.prenom}
        onChange={handleChange}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default CheckoutForm;
