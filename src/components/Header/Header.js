import PropTypes from 'prop-types';
import HeaderNav from '../HeaderNav/HeaderNav';
import HeaderUserOptions from '../HeaderUserOptions/HeaderUserOptions';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header} data-testid="Header">
    <div className={styles['header-row'] + ' page-container'}>
      <h4 className={styles.logo}><i class="fa-solid fa-signal"></i>Mobile Shop</h4>
      <HeaderNav></HeaderNav>
      <HeaderUserOptions></HeaderUserOptions>
    </div>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
