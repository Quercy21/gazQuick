import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/RemoveGas.module.css';

export default function RemoveGas() {
  const [reference, setReference] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete('/api/deleteBottle', { data: { reference } });
      console.log('Bouteille supprimée:', response.data);
      // Ajoutez ici la logique pour mettre à jour l'affichage côté client si nécessaire
    } catch (error) {
      console.error('Erreur lors de la suppression de la bouteille:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Retirer des bouteilles de gaz</h2>
      <div className={styles.field}>
        <label>Référence</label>
        <input
          type="text"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
      </div>
      <button type="submit">Retirer</button>
    </form>
  );
}
