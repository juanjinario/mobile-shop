import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMobileById } from "../../core/services/mobile.service";
import MobileActionsComponent from "./components/mobile-actions/mobile-actions.component";
import MobileInfoComponent from "./components/mobile-info/mobile-info.component";
import styles from "./mobile-detail.module.scss";

const MobileDetailScreen = () => {
  const [mobile, setMobile] = useState();
  const params = useParams();
  const { mobileId } = params;

  useEffect(() => {
    getMobileById({ mobileId }).then((mobile) => {
      setMobile(mobile);
    });
  }, [mobileId]);

  return (
    <div className="page-content" data-testid="MobileListScreen">
      <div className={styles["title-wrapper"]}>
        <h2 className={styles["title-page"]}>#AEstrenarMóvil</h2>
      </div>
      <div
        className={styles["mobile-detail"]}
        data-testid="mobile-detail-screen"
      >
        <div className={styles["img-wrapper"]}>
          <img
            alt={mobile?.model}
            className={ `${styles["mobile-img"]}  animate__animated animate__fadeIn`}
            data-testid="MobileCardImg"
            src={mobile?.imgUrl}
          ></img>
        </div>
        <div className={styles["detail-wrapper"]}>
          <MobileInfoComponent {...mobile}></MobileInfoComponent>
          <MobileActionsComponent
            {...mobile?.options}
            mobileId={mobile?.id}
            price={mobile?.price}
          ></MobileActionsComponent>
        </div>
      </div>
    </div>
  );
};

export default MobileDetailScreen;
