import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUserCircle, faDashboard, faBoxOpen, faList, faTruck, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/dashboard.module.css';

export default function AddLivreur() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [sexe, setSexe] = useState('');
  const [nomUtilisateur, setNomUtilisateur] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
//   const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const livreurData = { nom, prenom, sexe, nomUtilisateur, motDePasse };

    const res = await fetch('/api/ajoutLivreur', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livreurData),
    });

    if (res.ok) {
      router.push('/listeLivreur');
    } else {
      console.error('Erreur lors de l\'ajout du livreur');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>GazQuick - Ajouter Livreur</title>
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
            <li><FontAwesomeIcon icon={faList} />  <a href='/listeLivreur'>Liste livreur</a></li>
            <li><FontAwesomeIcon icon={faList} /> <a href='/consulterCommandes'>Consulter commande</a></li>
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
          <h2>Ajouter un livreur</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="prenom">Prénom</label>
              <input
                type="text"
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="sexe">Sexe</label>
              <input
                type="text"
                id="sexe"
                value={sexe}
                onChange={(e) => setSexe(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="nomUtilisateur">Nom d'utilisateur</label>
              <input
                type="text"
                id="nomUtilisateur"
                value={nomUtilisateur}
                onChange={(e) => setNomUtilisateur(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="motDePasse">Mot de passe</label>
              <input
                type="password"
                id="motDePasse"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                required
              />
            </div>
            {/* <div className={styles.formGroup}>
              <label htmlFor="phone">Téléphone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div> */}
            <button type="submit" className={styles.submitButton}>Ajouter Livreur</button>
          </form>
        </div>
      </main>
    </div>
  );
}
