// components/Cart.js
import CartItem from '../components/cartItem';
import OrderSummary from '../components/orderSummary';
import styles from '../styles/cartPages.module.css';

export default function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <h1>Votre panier</h1>
      </div>
      <div className={styles.cartItems}>
        <CartItem />
        <CartItem />
      </div>
      <OrderSummary />
      <div className={styles.suggested}>
        <h2>Vous pouvez ajouter aussi :</h2>
        <div className={styles.suggestedItems}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className={styles.suggestedItem} key={index}>
              <div className={styles.suggestedImage}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
