import React from 'react';
import PropTypes from 'prop-types';
import styles from './mobile-card.module.scss';
import { useNavigate } from 'react-router-dom';

const MobileCardComponent = ({ brand, id, imgUrl, model, price }) => {
  const navigate = useNavigate();
  const onClickCard = () => {
    navigate(`/${id}`);
  }
  return (
    <div className={styles['mobile-card']} data-testid="MobileCard" onClick={ onClickCard }>
      <div className={ `${styles['img-wrapper']}`}>
        <img alt={ model } className={styles['mobile-img']} data-testid="MobileCardImg" src={ imgUrl }></img>
      </div>
      <p className={styles['card-text']}>
        <span className={styles['title']} data-testid="MobileCardTitle">{ model }</span>
        <span className={styles['description']} data-testid="MobileCardTitle">{ brand }</span>
        <span className={styles['price']}>{ price } €</span>
      </p>
    </div>
  )
};

MobileCardComponent.propTypes = {};
MobileCardComponent.defaultProps = {};

export default  MobileCardComponent;
