import { useState, useEffect } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import CartSummary from '../components/CartSummary';
import styles from '../styles/Checkout.module.css';
import Header from '../components/Header';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [livraison, setLivraison] = useState(1000); // Prix de livraison par défaut
  const [livraisonDetails, setLivraisonDetails] = useState(null);
  const [modePaiement, setModePaiement] = useState('OrangeMoney');

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  const handleLivraisonSubmit = (details) => {
    setLivraisonDetails(details);
  };

  const handleValidateCart = async () => {
    const response = await fetch('/api/commande', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cartItems,
        livraisonDetails,
        modePaiement,
        total: cartItems.reduce((acc, item) => acc + item.prix * item.quantity, 0) + livraison
      })
    });
    if (response.ok) {
      alert('Commande validée avec succès');
      localStorage.removeItem('cartItems');
      // Rediriger vers la page de confirmation ou autre
    } else {
      alert('Erreur lors de la validation de la commande');
    }
  };

  return (
    <>
    <Header/>
    <div className={styles.checkout}>
      <CheckoutForm onSubmit={handleLivraisonSubmit} />
      <div className={styles.cartDetails}>
        <h2>Détails de la Commande</h2>
        <div className={styles.cartItems}>
          {cartItems.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <img src={item.imageUrl} alt={item.reference} className={styles.cartImage} />
              <div>
                <p>{item.reference}</p>
                <p>{item.prix} FCFA</p>
                <div>
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.paymentMethods}>
        <h2>Mode de Paiement</h2>
        <label>
          <input
            type="radio"
            name="modePaiement"
            value="OrangeMoney"
            checked={modePaiement === 'OrangeMoney'}
            onChange={(e) => setModePaiement(e.target.value)}
          />
          Orange Money
        </label>
        <label>
          <input
            type="radio"
            name="modePaiement"
            value="MobileMoney"
            checked={modePaiement === 'MobileMoney'}
            onChange={(e) => setModePaiement(e.target.value)}
          />
          Mobile Money
        </label>
        <label>
          <input
            type="radio"
            name="modePaiement"
            value="Espece"
            checked={modePaiement === 'Espece'}
            onChange={(e) => setModePaiement(e.target.value)}
          />
          Payer en Espèce à l'arrivée du livreur
        </label>
      </div>

      <CartSummary cartItems={cartItems} livraison={livraison} onValidate={handleValidateCart} />
    </div>
    </>
  );
};

export default Checkout;
