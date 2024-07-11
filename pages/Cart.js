// pages/cart.js
import Header from '../components/Header';
import Cart from '../components/cart';
import styles from '../styles/cartPages.module.css';

export default function CartPage() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Cart />
      </main>
    </div>
  );
}
