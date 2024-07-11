import styles from '../styles/card.module.css';

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <button className={styles.button}> <a href='/Product' >View more</a></button>
    </div>
  );
}
