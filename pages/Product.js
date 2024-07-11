import Header from '../components/Header';
import ProductDetail from '../components/ProductDetail';
import styles from '../styles/Product.module.css';

export default function Product() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <ProductDetail />
      </main>
    </div>
  );
}
