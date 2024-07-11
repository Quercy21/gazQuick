// pages/index.js
import Header from '../components/Header';
import SearchBar from '../components/searchbar';
import Card from '../components/card';
import styles from '../styles/details.module.css';

export default function details() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <SearchBar />
        <div className={styles.cards}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
