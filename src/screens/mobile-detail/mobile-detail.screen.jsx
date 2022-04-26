import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMobileById } from '../../core/services/mobile.service';
import MobileActionsComponent from './components/mobile-actions/mobile-actions.component';
import MobileInfoComponent from './components/mobile-info/mobile-info.component';
import styles from './mobile-detail.module.scss';

const MobileDetailScreen = () => {

  const [mobile, setMobile] = useState();
  // announced: "2016  August"
  // audioJack: "Yes"
  // battery: "Removable Li-Ion 2000 mAh battery"
  // bluetooth: "Yes"
  // brand: "Acer"
  // chipset: "Mediatek MT6737"
  // colors: ["Black", "White"]
  // cpu: "Quad-core 1.25 GHz Cortex-A53"
  // dimentions: "-"
  // displayResolution: "5.0 inches"
  // displaySize: "720 x 1280 pixels (~294 ppi pixel density)"
  // displayType: "IPS LCD capacitive touchscreen  16M colors"
  // edge: "Yes"
  // externalMemory: "microSD  up to 256 GB"
  // gprs: "Yes"
  // gps: "Yes with A-GPS"
  // gpu: "Mali-T720MP2"
  // id: "8hKbH2UHPM_944nRHYN1n"
  // imgUrl: "https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg"
  // internalMemory: ["8 GB"]
  // model: "Liquid Z6"
  // networkSpeed: "HSPA  LTE"
  // networkTechnology: "GSM / HSPA / LTE"
  // nfc: ""
  // options: {colors: [{code: 1000, name: "Black"}, {code: 1001, name: "White"}],…}
  // os: "Android 6.0 (Marshmallow)"
  // price: "120"
  // primaryCamera: ["8 MP", "autofocus", "LED flash"]
  // radio: "FM radio"
  // ram: "1 GB RAM"
  // secondaryCmera: "2 MP"
  // sensors: ["Accelerometer", "proximity"]
  // sim: ["Single SIM (Micro-SIM) or Dual SIM (Micro-SIM", "dual stand-by)"]
  // speaker: "Yes"
  // status: "Available. Released 2016  December"
  // usb: "microUSB 2.0"
  // weight: ""
  // wlan: "Yes"
  const params = useParams();
  const { mobileId } = params;

  useEffect(() => {
    getMobileById({ mobileId }).then((mobile) => {
      setMobile(mobile);
    });
  }, []);

  return (
    <div className='page-content' data-testid="MobileListScreen">
      <div className={styles["title-wrapper"]}>
        <h2 className={styles["title-page"]}>#AEstrenarMóvil</h2>
      </div>
      <div className={styles['mobile-detail']} data-testid="mobile-detail-screen">
        <div className={styles['img-wrapper']}>
          <img alt={ mobile?.model } className={styles['mobile-img']} data-testid="MobileCardImg" src={ mobile?.imgUrl }></img>
        </div>
        <div className={styles['detail-wrapper']}>
          <MobileInfoComponent {...mobile}></MobileInfoComponent>
          <MobileActionsComponent {...mobile?.options} mobileId={ mobile?.id } price={ mobile?.price }></MobileActionsComponent>
        </div>
      </div>
    </div>
  )
};

export default MobileDetailScreen;
