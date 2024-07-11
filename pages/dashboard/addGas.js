// pages/dashboard/addGas.js
import Header from '../../components/Header';
import Sidebar from '../../components/siderbar';
import AddGas from '../../components/addGas';
import styles from '../../styles/indexDasboard.module.css';

export default function AddGasPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          <AddGas />
        </div>
      </div>
    </div>
  );
}
