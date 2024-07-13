import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ bouteille, onViewDetail }) => {
  return (
    <div className={styles.card}>
      <img src={bouteille.imageUrl} alt={bouteille.reference} className={styles.image} />
      <h2>{bouteille.reference}</h2>
      <p>{bouteille.marque}</p>
      <p>{bouteille.poids} kg</p>
      <button className={styles.button} onClick={() => onViewDetail(bouteille)}>Voir plus</button>
    </div>
  );
};

export default Card;
