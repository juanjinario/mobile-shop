import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mobile-list.module.scss';

const MobileListScreen = () => (
  <div className={styles['mobile-list']} data-testid="mobile-list-screen">
    Mobile-list Screen
  </div>
);

MobileListScreen.propTypes = {};

MobileListScreen.defaultProps = {};

export default MobileListScreen;
