import { useState } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUserCircle, faDashboard, faBoxOpen, faList, faTruck, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/dashboard.module.css';

export default function Home() {
  const [form, setForm] = useState({
    reference: '',
    poids: '',
    marque: '',
    couleur: '',
    qte: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/ajoutBouteille', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert('Bouteille de gaz ajoutée avec succès');
        setForm({ reference: '', poids: '', marque: '', couleur: '', qte: '' });
      } else {
        alert('Erreur lors de l\'ajout de la bouteille de gaz');
      }
    } catch (error) {
      console.error(error);
      alert('Erreur lors de l\'ajout de la bouteille de gaz');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>GazQuick</title>
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
            <li className={styles.active}><FontAwesomeIcon icon={faList} /> Add Gaz</li>
            <li><FontAwesomeIcon icon={faList} /> Remove Gaz</li>
            <li><FontAwesomeIcon icon={faList} /> <a href='/consulterListe'> Consulter liste </a></li>
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
          <h2>Add gaz</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Reference*</label>
              <input type="text" name="reference" value={form.reference} onChange={handleChange} placeholder="Reference" required />
            </div>
            <div className={styles.formGroup}>
              <label>Poids*</label>
              <input type="number" name="poids" value={form.poids} onChange={handleChange} placeholder="Poids" required />
            </div>
            <div className={styles.formGroup}>
              <label>Marque*</label>
              <input type="text" name="marque" value={form.marque} onChange={handleChange} placeholder="Marque" required />
            </div>
            <div className={styles.formGroup}>
              <label>Couleur*</label>
              <input type="text" name="couleur" value={form.couleur} onChange={handleChange} placeholder="Couleur" required />
            </div>
            <div className={styles.formGroup}>
              <label>Quantité*</label>
              <input type="number" name="qte" value={form.qte} onChange={handleChange} placeholder="Quantité" required />
            </div>
            <button type="submit">Add Gaz</button>
          </form>
        </div>
      </main>
    </div>
  );
}
