import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/landingPage.module.css';
import Carte from '../components/carteAccueil';

export default function landingPage() {
  const images = [
    '/bocom.jpg',
    '/oryx.jpg',
    '/oryx2.png',
    '/OIP (1).jpeg',
    '/tradexgaz.jpeg',
    '/R.jpeg'
  ];
 
  return (
    <div className={styles.container}>
      <Head>
        <title>GazQuick</title>
        <meta name="description" content="GazQuick Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>GazQuick</div>
          <ul className={styles.navLinks}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className={styles.navIcons}>
            <a href="#"><img src="/search-icon.png" /></a>
            <a href="#"><img src="/cart-icon.png"   /></a>
            <a href="#"><img src="/user-icon.png"   /></a>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Lorem ipsum dolor sit amet consectetur. Magna faucibus cras</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Magna faucibus cras maecenas massa velit bibendum. Nisi nunc mi augue pulvinar non convallis.</p>
            <button className={styles.heroButton}> <a href='/details' > Get started</a></button>
          </div>
          <div className={styles.heroImage}>
            <Image src="/A.png" alt="Gas Illustration" width={400} height={300} />
          </div>
        </section>

        <section className={styles.partners}>
          <h2>Nos partenaires</h2>
          <div className={styles.partnerLogos}>
            <img src="/tradex.jpeg" />
            <img src="/R (3).jpeg"/>
            <img src="/logototalgaz.jpg" />
            <img src="/R (2).jpeg" />
          </div>
        </section>

        <div>
          <h2 className={styles.titre}>Catégories 1</h2>
          <div className={styles.conteneur}>
            {images.map((imageUrl, index) => (
              <Carte key={index} imageUrl={imageUrl} />
            ))}
          </div>
        </div>

        <div>
          <h2 className={styles.titre}>Catégories 2</h2>
          <div className={styles.conteneur}>
            {images.map((imageUrl, index) => (
              <Carte key={index} imageUrl={imageUrl} />
            ))}
          </div>
        </div>

        <section className={styles.delivery}>
          <h2>Livraison instantanée en moins de 20 minutes</h2>
          <p>Notre échange universel de bouteilles élimine les longs 
          délais et autres inefficacités associés  aux remplissages de bouteilles
           individuelles. Nous échangeons simplement votre bouteille vide contre notre 
            bouteille remplie sans les restrictions, en moins de 20 minutes (5 fois plus rapide).
             Nous livrons actuellement dans 30+ quartiers et en expansion. 
             Appelez-nous au (+237) 690-990-664 pour confirmer si votre emplacement est couvert.</p>
        </section>

      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>Empower yourself with knowledge through our top-tier e-learning <br/> platform and Join the future of learning <br/>with our innovative and accessible online programs.</p>
          <div className={styles.footerLinks}>
            <div>
              <h4>About</h4>
              <ul>
                <li><a href="#">Product</a></li>
                <li><a href="#">Patch</a></li>
                <li><a href="#">Updata</a></li>
                <li><a href="#">Beta test</a></li>
                <li><a href="#">Pricing Product</a></li>
              </ul>
            </div>
            <div>
              <h4>Product</h4>
              <ul>
                <li><a href="#">Patch</a></li>
                <li><a href="#">Updata</a></li>
                <li><a href="#">Beta test</a></li>
                <li><a href="#">Pricing Product</a></li>
              </ul>
            </div>
            <div>
              <h4>About</h4>
              <ul>
                <li><a href="#">Product</a></li>
                <li><a href="#">Patch</a></li>
                <li><a href="#">Updata</a></li>
                <li><a href="#">Beta test</a></li>
                <li><a href="#">Pricing Product</a></li>
              </ul>
            </div>
            <div>
              <h4>Product</h4>
              <ul>
                <li><a href="#">Patch</a></li>
                <li><a href="#">Updata</a></li>
                <li><a href="#">Beta test</a></li>
                <li><a href="#">Pricing Product</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.socialIcons}>
            <a href="#"><img src="/images/facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="/images/linkedin-icon.png" alt="LinkedIn" /></a>
            <a href="#"><img src="/images/twitter-icon.png" alt="Twitter" /></a>
            <a href="#"><img src="/images/instagram-icon.png" alt="Instagram" /></a>
          </div>
          <p>© 2024 Privacy by default</p>
        </div>
      </footer>
    </div>
  );
}
