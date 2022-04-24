import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderUserOptions.module.scss';

const HeaderUserOptions = () => (
  <div className={styles['header-user-options']} data-testid="HeaderUserOptions">
    <a className={styles['menu-link']} href="#"><i className="fa-solid fa-heart"></i></a>
    <a className={styles['menu-link']} href="#"><i className="fa-solid fa-cart-shopping"></i></a>
    <a className={styles['menu-link']} href="#"><i className="fa-solid fa-user"></i></a>
  </div>
);

HeaderUserOptions.propTypes = {};

HeaderUserOptions.defaultProps = {};

export default HeaderUserOptions;
