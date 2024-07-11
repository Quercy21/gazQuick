import { useState } from 'react';
import styles from '../styles/searchbar.module.css';
import axios from 'axios';

export default function SearchBar({ setResults }) {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/searchBottles?query=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Erreur lors de la recherche des bouteilles:', error);
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Entrez le nom de la bouteille que vous recherchez"
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={styles.search} onClick={handleSearch}>Search</button>
    </div>
  );
}