import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import SearchBar from '../components/searchbar';
import Card from '../components/card';
import styles from '../styles/details.module.css';

export default function Details() {
  const [bouteilles, setBouteilles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchBouteilles() {
      const res = await fetch('/api/ajoutBouteille');
      const data = await res.json();
      setBouteilles(data);
    }
    fetchBouteilles();
  }, []);

  const handleViewDetail = (bouteille) => {
    router.push({
      pathname: '/Product',
      query: bouteille
    });
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <SearchBar />
        <div className={styles.cards}>
          {bouteilles.map((bouteille) => (
            <Card key={bouteille.id} bouteille={bouteille} onViewDetail={handleViewDetail} />
          ))}
        </div>
      </main>
    </div>
  );
}
