import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/page.module.css';

export default function UserInscription() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    sexe: '',
    nomUtilisateur: '',
    motDePasse: '',
    confirmPassword: '',
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
    if (formData.motDePasse !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/');
      } else {
        const data = await res.json();
        setError(data.message);
      }
    } catch (error) {
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GazQuick</h1>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <h2 className={styles.subtitle}>Create an account</h2>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <label htmlFor="prenom" className={styles.inputLabel}>First Name *</label>
              <input type="text" id="prenom" className={styles.inputField} placeholder="First Name" value={formData.prenom} onChange={handleChange} required />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="nom" className={styles.inputLabel}>Last Name *</label>
              <input type="text" id="nom" className={styles.inputField} placeholder="Last Name" value={formData.nom} onChange={handleChange} required />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="sexe" className={styles.inputLabel}>Sex *</label>
              <input type="text" id="sexe" className={styles.inputField} placeholder="Sex" value={formData.sexe} onChange={handleChange} required />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="nomUtilisateur" className={styles.inputLabel}>Username *</label>
              <input type="text" id="nomUtilisateur" className={styles.inputField} placeholder="Username" value={formData.nomUtilisateur} onChange={handleChange} required />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="motDePasse" className={styles.inputLabel}>Password *</label>
              <input type="password" id="motDePasse" className={styles.inputField} placeholder="Password" value={formData.motDePasse} onChange={handleChange} required />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="confirmPassword" className={styles.inputLabel}>Confirm Password *</label>
              <input type="password" id="confirmPassword" className={styles.inputField} placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <button type="submit" className={styles.submitButton}>Sign Up</button>
          </form>
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
