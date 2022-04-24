import React from 'react';
import PropTypes from 'prop-types';
import styles from './mobile-card.module.scss';

const MobileCardComponent = () => (
  <div className={styles['mobile-card']} data-testid="mobile-card">
    MobileCardComponent Component
  </div>
);

MobileCardComponent.propTypes = {};
MobileCardComponent.defaultProps = {};

export default  MobileCardComponent;
