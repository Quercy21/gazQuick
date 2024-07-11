import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menu}>
        <div className={styles.menuItem}><Link href="/dashboard/">Dashboard</Link></div>
        <div className={styles.menuItem}>Products</div>
        <div className={styles.menuItem}>Client</div>
        <div className={styles.menuItem}>Order Lists</div>
        <div className={styles.menuItem}>Product Stock</div>
      </div>
      <div className={styles.pages}>
        <div className={styles.pageItem}><Link href="/dashboard/addGas">Add Gaz</Link></div>
        <div className={styles.pageItem}><Link href="/dashboard/">Add livreur</Link></div>
        <div className={styles.pageItem}><Link href="/dashboard/assignOrder">Affecter une commande</Link></div>
        <div className={styles.pageItem}><Link href="/dashboard/order">Consulter commande</Link></div>
      </div>
      <div className={styles.settings}>
        <div>Settings</div>
        <div>Logout</div>
      </div>
    </div>
  );
};

export default Sidebar;
