import styles from '../styles/AddGas.module.css';
import { useState } from 'react';
import axios from 'axios';

export default function AddGas() {
  const [formData, setFormData] = useState({
    reference: '',
    poids: '',
    marque: '',
    couleur: '',
    qte: '',
    image: null,
    publieParId: '1',  
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('/api/ajouterBouteille', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Bottle added:', response.data);
    } catch (error) {
      console.error('Error adding bottle:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Ajouter des bouteilles de gaz</h2>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label>Reference</label>
          <input type="text" name="reference" value={formData.reference} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label>Poids (kg)</label>
          <input type="number" step="0.01" name="poids" value={formData.poids} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label>Marque</label>
          <input type="text" name="marque" value={formData.marque} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label>Couleur</label>
          <input type="text" name="couleur" value={formData.couleur} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label>Quantité</label>
          <input type="number" name="qte" value={formData.qte} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label>Image URL</label>
          <input type="file" name="image" onChange={handleChange} />
        </div>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}
