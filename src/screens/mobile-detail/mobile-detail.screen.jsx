import React from 'react';
import PropTypes from 'prop-types';
import styles from './mobile-detail.module.scss';

const MobileDetailScreen = () => (
  <div className={styles['mobile-detail']} data-testid="mobile-detail-screen">
    Mobile-list Component
  </div>
);

MobileDetailScreen.propTypes = {};

MobileDetailScreen.defaultProps = {};

export default MobileDetailScreen;
