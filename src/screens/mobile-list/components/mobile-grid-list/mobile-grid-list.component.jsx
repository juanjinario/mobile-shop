import React from 'react';
import PropTypes from 'prop-types';
import styles from './mobile-grid-list.module.scss';

const MobileGridListComponent = () => (
  <div className={styles['mobile-grid-list']} data-testid="mobile-grid-list">
    MobileGridListComponent Component
  </div>
);

MobileGridListComponent.propTypes = {};
MobileGridListComponent.defaultProps = {};

export default  MobileGridListComponent;
