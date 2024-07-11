import styles from '../styles/Order.module.css';

export default function Orders() {
  const orders = [
    { id: 1, customer: 'John Doe', product: 'Tradex Gaz', quantity: 1, address: '123 Street Name' },
    { id: 2, customer: 'Jane Smith', product: 'Butagaz', quantity: 2, address: '456 Another St' }
  ];

  return (
    <div className={styles.orders}>
      <h2>Demandes de gaz des clients</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Adresse</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
