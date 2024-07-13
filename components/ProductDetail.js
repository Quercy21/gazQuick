import { useRouter } from 'next/router';
import Slider from 'react-slick';
import styles from '../styles/ProductDetail.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

export default function ProductDetail() {
  const router = useRouter();
  const { imageUrl, reference, poids, marque, prix, description } = router.query;
  const [isAdded, setIsAdded] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleAddToCart = () => {
    const newItem = { reference, poids, marque, prix, imageUrl, quantity: 1 };
    const existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedItems = [...existingItems, newItem];
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className={styles.productDetail}>
      <div className={styles.imageSlider}>
        {/* <Slider {...settings}>
          {imageUrl && (
            <div> */}
              <img src={imageUrl} className={styles.productImage} alt="product" />
            {/* </div>
          )}
        </Slider> */}
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.productTitle}>{reference}</h1>
        <div className={styles.productMeta}>
          <span className={styles.weight}>{poids} kg</span>
          <span className={styles.price}>Prix Unitaire : 6500 {prix} FCFA</span>
        </div>
        <div className={styles.description}>
          <h2>Marque</h2>
          <p>{marque}</p>
        </div>
        <div className={styles.cartActions}>
          <button className={styles.addToCart} onClick={handleAddToCart}>
            {isAdded ? 'Ajouté au panier' : 'Ajouter au panier'}
          </button>
        </div>
      </div>
      <div className={styles.similarProducts}>
        <h2>Article Similaire</h2>
        <div className={styles.cards}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.similarImage}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
