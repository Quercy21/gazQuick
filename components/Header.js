// components/Header.js
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>GazQuick</div>
      <nav>
        <a href="/landingPage" className={styles.link}>Home</a>
        <a href="/details" className={styles.link}>Shop</a>
        <a href="/landingPage" className={styles.link}>About</a>
        <a href="/panier" className={styles.link}>Panier</a>
        <a href="/landingPage" className={styles.link}>Contact</a>
        <a href="/landingPage" className={styles.link}>Pages</a>
      </nav>
      <div>
        <a href="#" className={styles.link}>Login</a>
        <a href="#" className={styles.link}>Cart</a>
      </div>
    </header>
  );
}
