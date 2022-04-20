import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.header} data-testid="Header">
    Header Component
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
