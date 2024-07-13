// components/Cart.js
import React, { useEffect, useState } from 'react';
import styles from '../styles/cartPanier.module.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Récupérer les articles du panier depuis le localStorage ou une API
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  const handleQuantityChange = (index, amount) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity += amount;
    if (updatedItems[index].quantity < 1) {
      updatedItems[index].quantity = 1;
    }
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.prix * item.quantity, 0);

  return (
    <div className={styles.cartContainer}>
      <h1>Votre panier</h1>
      {cartItems.map((item, index) => (
        <div className={styles.cartItem} key={index}>
          <img src={item.imageUrl} alt={item.reference} className={styles.cartImage} />
          <div className={styles.cartDetails}>
            <h2>{item.reference}</h2>
            <p>{item.poids} kg</p>
            <p>{item.prix} FCFA</p>
            <div className={styles.cartActions}>
              <button onClick={() => handleQuantityChange(index, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(index, 1)}>+</button>
              <button className={styles.delete} onClick={() => handleRemoveItem(index)}>Supprimer</button>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.cartSummary}>
        <h2>Résumé de votre commande :</h2>
        <p>{totalPrice} FCFA</p>
        <button className={styles.checkoutButton}> <a href='/checkout' >Valider le panier</a></button>
      </div>
    </div>
  );
};

export default Cart;
