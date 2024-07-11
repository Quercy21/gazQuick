import styles from '../styles/orderSummary.module.css';

export default function OrderSummary() {
  return (
    <div className={styles.orderSummary}>
      <h2>Résumé de votre commande :</h2>
      <p>13.000 FCFA</p>
      <button className={styles.checkoutButton}>Valider le panier</button>
    </div>
  );
}
