// import styles from '../styles/card.module.css';

// export default function Card({ bouteille }) {
//   return (
//     <div className={styles.card}>
//       <div className={styles.image} style={{ backgroundImage: `url(${bouteille.imageUrl})` }}></div>
//       <button className={styles.button}><a href='/Product'>View more</a></button>
//     </div>
//   );
// }
import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ bouteille, onViewDetail }) => {
  return (
    <div className={styles.card}>
      <img src={bouteille.imageUrl} alt={bouteille.reference} className={styles.image} />
      <h2>{bouteille.reference}</h2>
      <p>{bouteille.marque}</p>
      <p>{bouteille.poids} kg</p>
      <button onClick={() => onViewDetail(bouteille)}>Voir plus</button>
    </div>
  );
};

export default Card;
