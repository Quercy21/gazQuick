import styles from '../styles/cartItem.module.css';

export default function CartItem() {
  return (
    <div className={styles.cartItem}>
      <img src="/images/product.png" alt="Product" className={styles.productImage} />
      <div className={styles.productDetails}>
        <h2>Tradex Gaz</h2>
        <p>12 kg</p>
        <p>6500 FCFA</p>
        <div className={styles.quantityControls}>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <button className={styles.removeButton}>🗑️</button>
      </div>
    </div>
  );
}
