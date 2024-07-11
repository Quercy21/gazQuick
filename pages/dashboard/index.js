import { APP_PATH_ROUTES_MANIFEST } from 'next/dist/shared/lib/constants';
import Header from '../../components/Header';
import Sidebar from '../../components/siderbar';
import styles from '../../styles/indexDasboard.module.css';

export default function DashboardPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
      <div className={styles.banner}>
        <h1>Enjoy free home delivery in this summer.</h1>
        <p>Designer Dresses - Pick from trendy Designer Dress.</p>
        <button> <a href='' >Get Started</a></button>
      </div>
    </div>
      </div>
    </div>
  );
}
