import Link from 'next/link';
import styles from '../styles/headerVendeur.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>GazQuick</div>
      <nav className={styles.nav}>
        <Link href="/dashboard/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/dashboard/">Dashboard</Link>
      </nav>
    </header>
  );
}
