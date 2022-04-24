import React from 'react';
import PropTypes from 'prop-types';
import styles from './mobile-card.module.scss';

// brand: "Acer"
// id: "ZmGrkLRPXOTpxsU4jjAcv"
// imgUrl: "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
// model: "Iconia Talk S"
// price: "170"

const MobileCardComponent = ({ brand, id, imgUrl, model, price }) => (
  <div className={styles['mobile-card']} data-testid="MobileCard">
    <div className={styles['img-wrapper']}>
      <img alt={ model } className={styles['mobile-img']} data-testid="MobileCardImg" src={ imgUrl }></img>
    </div>
    <p className={styles['card-text']}>
      <span className={styles['title']} data-testid="MobileCardTitle">{ model }</span>
      <span className={styles['description']} data-testid="MobileCardTitle">{ brand }</span>
      <span className={styles['price']}>{ price } €</span>
    </p>
  </div>
);

MobileCardComponent.propTypes = {};
MobileCardComponent.defaultProps = {};

export default  MobileCardComponent;
