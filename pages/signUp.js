import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/signUp.module.css';

export default function SignUp() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GazQuick</h1>
      <div className={styles.card}>
        <div className={styles.content}>
          {/* <h1 className={styles.title}>GazQuick</h1> */}
          <h2 className={styles.subtitle}>Choisissez le type de compte que vous souhaitez creer</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit nulla sed interdum. Aenean purus purus facilisis lectus turpis pharetra vitae in sit.
            Maecenas ipsum ultricies e nec. Elit mauris amet vitae facilisi diam sit nibh dui.
          </p>
          <div className={styles.links}>
            <Link href="/UserInscription" legacyBehavior>
              <a className={styles.link}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 4a2 2 0 100-4 2 2 0 000 4zm-3 2a3 3 0 100-6 3 3 0 000 6zm0 2a6 6 0 00-6 6v1h18v-1a6 6 0 00-6-6H7zm3 1a2 2 0 110 4 2 2 0 010-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className={styles.linkText}>
                  <h3 className={styles.linkTitle}>Client</h3>
                  <p className={styles.linkDescription}>Lorem ipsum dolor sit nulla sed interdum</p>
                </div>
              </a>
            </Link>
            <Link href="/MerchantInscription" legacyBehavior>
              <a className={styles.link}>
                <div className={styles.iconWrapperDark}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 4a2 2 0 100-4 2 2 0 000 4zm-3 2a3 3 0 100-6 3 3 0 000 6zm0 2a6 6 0 00-6 6v1h18v-1a6 6 0 00-6-6H7zm3 1a2 2 0 110 4 2 2 0 010-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className={styles.linkText}>
                  <h3 className={styles.linkTitle}>Etablissement</h3>
                  <p className={styles.linkDescription}>Lorem ipsum dolor sit nulla sed interdum</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/gazquick.png"
            alt="Delivery image"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
