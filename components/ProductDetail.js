import React from 'react';
import Slider from 'react-slick';
import styles from '../styles/ProductDetail.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ProductDetail() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.productDetail}>
      <div className={styles.imageSlider}>
        <Slider {...settings}>
          <div>
            <img src="/bocom.jpg" className={styles.productImage} />
          </div>
          <div>
            <img src="/oryx2.png" className={styles.productImage} />
          </div>
          <div>
            <img src="/R.jpeg" className={styles.productImage} />
          </div>
        </Slider>
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.productTitle}>Tradex Gaz</h1>
        <div className={styles.productMeta}>
          <span className={styles.weight}>12 kg</span>
          <span className={styles.price}>6500 FCFA</span>
        </div>
        <div className={styles.description}>
          <h2>Description</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Magna faucibus cras maecenas massa velit bibendum. Nisi nunc mi augue pulvinar non convallis.</p>
          <p>Lorem ipsum dolor sit amet consectetur. Magna faucibus cras maecenas massa velit bibendum. Nisi nunc mi augue pulvinar non convallis.</p>
        </div>
        <div className={styles.cartActions}>
          <div className={styles.quantity}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className={styles.addToCart}>Ajouter au panier</button>
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
