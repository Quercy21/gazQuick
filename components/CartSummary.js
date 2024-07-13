// components/CartSummary.js
import styles from '../styles/CartSummary.module.css';

const CartSummary = ({ cartItems, livraison, onValidate }) => {
  const total = cartItems.reduce((acc, item) => acc + item.prix * item.quantity, 0);
  const totalLivraison = total + livraison;

  return (
    <div className={styles.summary}>
      <h2>Résumé du panier</h2>
      <p>Prix de référence : {total} FCFA</p>
      <p>Prix de livraison : {livraison} FCFA</p>
      <p>Total : {totalLivraison} FCFA</p>
      <button onClick={onValidate}>Valider le panier</button>
    </div>
  );
};

export default CartSummary;
