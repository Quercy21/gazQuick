import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/page.module.css';

export default function Home() {
  const [formData, setFormData] = useState({
    nomUtilisateur: '',
    password: '',
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

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('token', data.token);
        router.push('/landingPage');
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
          <h2 className={styles.subtitle}>Salut, connecte toi à ton compte !</h2>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <label htmlFor="nomUtilisateur" className={styles.inputLabel}>Nom d'utilisateur *</label>
              <input
                type="text"
                id="nomUtilisateur"
                className={styles.inputField}
                placeholder="Nom d'utilisateur *"
                value={formData.nomUtilisateur}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="password" className={styles.inputLabel}>Mot de passe *</label>
              <input
                type="password"
                id="password"
                className={styles.inputField}
                placeholder="Mot de passe *"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>Se connecter</button>
          </form>
          <p className={styles.signupLink}>
            Vous n'avez pas de compte ? <a href="/signUp">Inscrivez-vous !</a>
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
