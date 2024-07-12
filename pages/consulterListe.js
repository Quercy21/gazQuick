import { useEffect, useState } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUserCircle, faDashboard, faBoxOpen, faList, faTruck, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/consulterListe.module.css';

export default function ConsulterListe() {
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
    <div className={styles.container}>
      <Head>
        <title>GazQuick - Consulter Liste</title>
      </Head>
      <aside className={styles.sidebar}>
        <h1 className={styles.logo}>GazQuick</h1>
        <nav className={styles.nav}>
          <ul>
            <li><FontAwesomeIcon icon={faDashboard} /> Dashboard</li>
            <li><FontAwesomeIcon icon={faBoxOpen} /> Products</li>
            <li><FontAwesomeIcon icon={faList} /> Client</li>
            <li><FontAwesomeIcon icon={faList} /> Order Lists</li>
            <li><FontAwesomeIcon icon={faBoxOpen} /> Product Stock</li>
          </ul>
          <ul>
            <li><FontAwesomeIcon icon={faList} /> <a href='/dashboard'>Add Gaz </a></li>
            <li><FontAwesomeIcon icon={faList} /> Remove Gaz</li>
            <li className={styles.active}><FontAwesomeIcon icon={faList} /> <a href='/consulterListe'> Consulter liste</a></li>
            <li><FontAwesomeIcon icon={faTruck} /> Add livreur</li>
            <li><FontAwesomeIcon icon={faList} /> Consulter commande</li>
          </ul>
        </nav>
        <nav className={styles.bottomNav}>
          <ul>
            <li><FontAwesomeIcon icon={faCog} /> Settings</li>
            <li><FontAwesomeIcon icon={faSignOutAlt} /> Logout</li>
          </ul>
        </nav>
      </aside>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.search}>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search" />
          </div>
          <div className={styles.actions}>
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
        </header>
        <div className={styles.content}>
          <h2>Liste des bouteilles de gaz</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Référence</th>
                <th>Poids</th>
                <th>Marque</th>
                <th>Couleur</th>
                <th>Quantité</th>
                <th>Date d'ajout</th>
              </tr>
            </thead>
            <tbody>
              {bouteilles.map((bouteille) => (
                <tr key={bouteille.id}>
                  <td>
                    {bouteille.imageUrl && (
                      <img src={bouteille.imageUrl} alt={bouteille.reference} className={styles.image} />
                    )}
                  </td>
                  <td>{bouteille.reference}</td>
                  <td>{bouteille.poids}</td>
                  <td>{bouteille.marque}</td>
                  <td>{bouteille.couleur}</td>
                  <td>{bouteille.qte}</td>
                  <td>{new Date(bouteille.dateAjout).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
