import Header from '../../components/Header';
import Sidebar from '../../components/siderbar';
import Orders from '../../components/Order';
import styles from '../../styles/indexDasboard.module.css';

export default function OrdersPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          <Orders />
        </div>
      </div>
    </div>
  );
}
