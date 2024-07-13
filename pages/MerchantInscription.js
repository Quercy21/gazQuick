import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/page.module.css';

export default function MerchantInscription() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    sexe: '',
    nomUtilisateur: '',
    motDePasse: '',
    confirmerMotDePasse: '',
    entreprise: '',
    adresse: '',
  });

  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.motDePasse !== formData.confirmerMotDePasse) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    try {
      const res = await fetch('/api/registerVendeur', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, role: 'vendeur' }),
      });

      if (res.ok) {
        router.push('/merchantLogin');
      } else {
        const data = await res.json();
        setError(data.message);
      }
    } catch (error) {
      setError('Une erreur inattendue est survenue');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GazQuick</h1>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <h2 className={styles.subtitle}>Créer un compte vendeur</h2>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <label htmlFor="prenom" className={styles.inputLabel}>Prénom *</label>
              <input
                type="text"
                id="prenom"
                className={styles.inputField}
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="nom" className={styles.inputLabel}>Nom *</label>
              <input
                type="text"
                id="nom"
                className={styles.inputField}
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="sexe" className={styles.inputLabel}>Sexe *</label>
              <input
                type="text"
                id="sexe"
                className={styles.inputField}
                placeholder="Sexe"
                value={formData.sexe}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="nomUtilisateur" className={styles.inputLabel}>Nom d'utilisateur *</label>
              <input
                type="text"
                id="nomUtilisateur"
                className={styles.inputField}
                placeholder="Nom d'utilisateur"
                value={formData.nomUtilisateur}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="motDePasse" className={styles.inputLabel}>Mot de Passe *</label>
              <input
                type="password"
                id="motDePasse"
                className={styles.inputField}
                placeholder="Créer votre mot de passe"
                value={formData.motDePasse}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="confirmerMotDePasse" className={styles.inputLabel}>Confirmer votre mot de passe *</label>
              <input
                type="password"
                id="confirmerMotDePasse"
                className={styles.inputField}
                placeholder="Confirmer votre mot de passe"
                value={formData.confirmerMotDePasse}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>S'inscrire</button>
          </form>
          <p className={styles.signupLink}>
            Vous avez déjà un compte ? <a href="/merchantLogin">Connectez-vous !</a>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/gazquick.png"
            alt="Delivery image"
            layout="responsive"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
