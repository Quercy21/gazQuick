import Header from '../../components/Header';
import Sidebar from '../../components/siderbar';
import RemoveGas from '../../components/removeGas';
import styles from '../../styles/indexDasboard.module.css';

export default function RemoveGasPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          <RemoveGas />
        </div>
      </div>
    </div>
  );
}
