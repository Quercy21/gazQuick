import { useState } from 'react';
import styles from '../styles/AssignOrder.module.css';

export default function AssignOrder() {
  const [orderId, setOrderId] = useState('');
  const [deliveryPerson, setDeliveryPerson] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assign the order logic here
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Affecter une commande à un livreur</h2>
      <div className={styles.field}>
        <label>ID de la commande</label>
        <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label>Nom du livreur</label>
        <input type="text" value={deliveryPerson} onChange={(e) => setDeliveryPerson(e.target.value)} />
      </div>
      <button type="submit">Affecter</button>
    </form>
  );
}
