import HeaderNav from '../header-nav/HeaderNav.component';
import HeaderUserOptions from '../header-user-options/header-user-options.component';
import styles from './header.module.scss';

const HeaderComponent = () => (
  <header className={styles.header} data-testid="Header">
    <div className={styles['header-row'] + ' page-container'}>
      <h4 className={styles.logo}><i className="fa-solid fa-signal"></i>Mobile Shop</h4>
      <HeaderNav></HeaderNav>
      <HeaderUserOptions></HeaderUserOptions>
    </div>
  </header>
);

export default HeaderComponent;
