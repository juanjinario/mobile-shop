import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderNav.module.scss';

export const HeaderNav = () => (
  <div className={styles['header-nav']} data-testid="HeaderNav">
    <a className={styles['menu-link']} href="/">
      <i className="fa-solid fa-mobile-screen-button"></i> 
      <span>Móviles</span>
    </a>
    <a className={styles['menu-link']} href="/">
      <i className="fa-solid fa-tablet-screen-button"></i>
      <span>Tablets</span>
    </a>
    <a className={styles['menu-link']} href="/">
      <i className="fa-solid fa-tv"></i> 
      <span>Televisores</span>
    </a>
    <a className={styles['menu-link']} href="/">
      <i className={styles['fire-icon'] + ' fa-solid fa-fire'}></i> 
      <span>Ofertas</span>
    </a>
  </div>
);

HeaderNav.propTypes = {};

HeaderNav.defaultProps = {};

export default HeaderNav;
