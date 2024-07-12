import styles from '../styles/card.module.css';

export default function Card({ bouteille }) {
  return (
    <div className={styles.card}>
      <div className={styles.image} style={{ backgroundImage: `url(${bouteille.imageUrl})` }}></div>
      <button className={styles.button}><a href='/Product'>View more</a></button>
    </div>
  );
}
