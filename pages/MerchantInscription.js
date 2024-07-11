import Image from 'next/image';
import styles from '../styles/page.module.css'; 

export default function MerchantInscription() {
  return (
    <div className={styles.container}>
       <h1 className={styles.title}>GazQuick</h1>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <h2 className={styles.subtitle}>Create an account</h2>
          <form>
            <div className={styles.inputContainer}>
              <label htmlFor="name" className={styles.inputLabel}>Name *</label>
              <input type="text" id="name" className={styles.inputField} placeholder="Your name" />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="email" className={styles.inputLabel}>Email address *</label>
              <input type="email" id="email" className={styles.inputField} placeholder="Email *" />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="password" className={styles.inputLabel}>Password *</label>
              <input type="password" id="password" className={styles.inputField} placeholder="create your password" />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="password" className={styles.inputLabel}>Confirm your password *</label>
              <input type="password" id="password" className={styles.inputField} placeholder="Confirm your password" />
            </div>
            <button type="submit" className={styles.submitButton}> <a  href='/dashboard'>Sign Up</a></button>
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
