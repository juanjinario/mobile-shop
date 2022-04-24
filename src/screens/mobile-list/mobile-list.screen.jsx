import styles from './mobile-list.module.scss';
import MobileGridListComponent from './components/mobile-grid-list/mobile-grid-list.component';

const MobileListScreen = () => (
  <div className='page-content' data-testid="MobileListScreen">
    <MobileGridListComponent></MobileGridListComponent>
  </div>
);

export default MobileListScreen;
