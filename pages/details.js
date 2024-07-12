import { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/searchbar';
import Card from '../components/card';
import styles from '../styles/details.module.css';

export default function details() {
  const [bouteilles, setBouteilles] = useState([]);

  useEffect(() => {
    async function fetchBouteilles() {
      const res = await fetch('/api/ajoutBouteille');
      const data = await res.json();
      setBouteilles(data);
    }
    fetchBouteilles();
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <SearchBar />
        <div className={styles.cards}>
          {bouteilles.map((bouteille) => (
            <Card key={bouteille.id} bouteille={bouteille} />
          ))}
        </div>
      </main>
    </div>
  );
}
