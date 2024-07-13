import { useEffect, useState } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUserCircle, faDashboard, faBoxOpen, faList, faTruck, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/consulterListe.module.css';

export default function ListeLivreur() {
  const [livreurs, setLivreurs] = useState([]);

  useEffect(() => {
    async function fetchLivreurs() {
      const res = await fetch('/api/listeLivreur');
      const data = await res.json();
      setLivreurs(data);
    }
    fetchLivreurs();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>GazQuick - Liste Livreur</title>
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
            <li className={styles.active}><FontAwesomeIcon icon={faList} /> Liste livreur</li>
            <li><FontAwesomeIcon icon={faList} /> <a href='/consulterCommande'>Consulter commande</a></li>
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
          <h2>Liste des livreurs</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Sexe</th>
                <th>Nom d'utilisateur</th>
                <th>Téléphone</th>
              </tr>
            </thead>
            <tbody>
              {livreurs.map((livreur) => (
                <tr key={livreur.id}>
                  <td>{livreur.nom}</td>
                  <td>{livreur.prenom}</td>
                  <td>{livreur.sexe}</td>
                  <td>{livreur.nomUtilisateur}</td>
                  <td>{livreur.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
