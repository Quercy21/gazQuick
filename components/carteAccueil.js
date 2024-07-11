import styles from '../styles/carteAcceuil.module.css'

const Carte = ({ imageUrl }) => {
    return (
      <div className={styles.carte}>
        <img src={imageUrl}  className={styles.image} />
        <button className={styles.bouton}> <a href='/details' > Voir plus</a></button>
      </div>
    );
  };
  
  export default Carte;
  