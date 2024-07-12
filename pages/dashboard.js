import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUserCircle, faDashboard, faBoxOpen, faList, faTruck, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/dashboard.module.css';

export default function AddGaz() {
  const [reference, setReference] = useState('');
  const [poids, setPoids] = useState('');
  const [marque, setMarque] = useState('');
  const [couleur, setCouleur] = useState('');
  const [qte, setQte] = useState('');
  const [image, setImage] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('reference', reference);
    formData.append('poids', poids);
    formData.append('marque', marque);
    formData.append('couleur', couleur);
    formData.append('qte', qte);
    formData.append('image', image);

    const res = await fetch('/api/ajoutBouteille', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      router.push('/consulterListe');
    } else {
      console.error('Erreur lors de l\'ajout de la bouteille de gaz');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>GazQuick - Ajouter Gaz</title>
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
            <li className={styles.active}><FontAwesomeIcon icon={faList} /> <a href='/dashboard'>Add Gaz </a></li>
            <li><FontAwesomeIcon icon={faList} /> <a href='/consulterListe'>Consulter liste </a></li>
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
          <h2>Ajouter une bouteille de gaz</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="reference">Référence</label>
              <input
                type="text"
                id="reference"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="poids">Poids</label>
              <input
                type="number"
                id="poids"
                value={poids}
                onChange={(e) => setPoids(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="marque">Marque</label>
              <input
                type="text"
                id="marque"
                value={marque}
                onChange={(e) => setMarque(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="couleur">Couleur</label>
              <input
                type="text"
                id="couleur"
                value={couleur}
                onChange={(e) => setCouleur(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="qte">Quantité</label>
              <input
                type="number"
                id="qte"
                value={qte}
                onChange={(e) => setQte(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>Ajouter Gaz</button>
          </form>
        </div>
      </main>
    </div>
  );
}
