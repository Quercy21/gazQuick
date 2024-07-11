// pages/dashboard/assignOrder.js
import Header from '../../components/Header';
import Sidebar from '../../components/siderbar';
import AssignOrder from '../../components/AssignOrder';
import styles from '../../styles/indexDasboard.module.css';

export default function AssignOrderPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          <AssignOrder />
        </div>
      </div>
    </div>
  );
}
