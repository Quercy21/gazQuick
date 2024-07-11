import { useState, useEffect } from 'react';
import styles from '../styles/BottlesList.module.css';
import axios from 'axios';

export default function BottlesList({ results }) {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    if (results) {
      setBottles(results);
    } else {
      const fetchBottles = async () => {
        try {
          const response = await axios.get('/api/getAllBottles');
          setBottles(response.data);
        } catch (error) {
          console.error('Erreur lors de la récupération des bouteilles:', error);
        }
      };

      fetchBottles();
    }
  }, [results]);

  return (
    <div className={styles.bottlesList}>
      {bottles.map((bottle) => (
        <div key={bottle.id} className={styles.bottle}>
          <h3>{bottle.reference}</h3>
          <p>Poids: {bottle.poids} kg</p>
          <p>Marque: {bottle.marque}</p>
          <p>Couleur: {bottle.couleur}</p>
          <p>Quantité: {bottle.qte}</p>
          <img src={bottle.image} alt={bottle.reference} className={styles.image} />
        </div>
      ))} 
    </div>
  );
}
