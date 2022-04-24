import PropTypes from 'prop-types';
import HeaderNav from '../HeaderNav/HeaderNav.component';
import HeaderUserOptions from '../HeaderUserOptions/HeaderUserOptions';
import styles from './Header.module.scss';

const HeaderComponent = () => (
  <header className={styles.header} data-testid="Header">
    <div className={styles['header-row'] + ' page-container'}>
      <h4 className={styles.logo}><i className="fa-solid fa-signal"></i>Mobile Shop</h4>
      <HeaderNav></HeaderNav>
      <HeaderUserOptions></HeaderUserOptions>
    </div>
  </header>
);

HeaderComponent.propTypes = {};

HeaderComponent.defaultProps = {};

export default HeaderComponent;
