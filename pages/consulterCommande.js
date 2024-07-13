import { useEffect, useState } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUserCircle, faDashboard, faBoxOpen, faList, faTruck, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/consulterListe.module.css';

export default function ConsulterCommandes() {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    async function fetchCommandes() {
      const res = await fetch('/api/listeCommandes');
      const data = await res.json();
      setCommandes(data);
    }
    fetchCommandes();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>GazQuick - Liste Commandes</title>
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
            <li><FontAwesomeIcon icon={faList} /> <a href='/consulterListe'> Consulter liste</a></li>
            <li><FontAwesomeIcon icon={faTruck} /> <a href='/addLivreur'>Add Livreur</a></li>
            <li><FontAwesomeIcon icon={faList} /> <a href='/listeLivreur'>Liste livreur</a></li>
            <li className={styles.active}><FontAwesomeIcon icon={faList} /> Consulter commande</li>
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
          <h2>Liste des commandes</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID Commande</th>
                <th>Date</th>
                <th>Client</th>
                <th>Produit</th>
                <th>Quantité</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {commandes.map((commande) => (
                <tr key={commande.id}>
                  <td>{commande.id}</td>
                  <td>{new Date(commande.date).toLocaleString()}</td>
                  <td>{commande.utilisateur.nom} {commande.utilisateur.prenom}</td>
                  <td>{commande.produit}</td>
                  <td>{commande.quantite}</td>
                  <td>{commande.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
