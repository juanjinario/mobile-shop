import { useEffect, useState } from "react";
import styles from "./mobile-grid-list.module.scss";
import { getAllMobiles } from "../../../../core/services/mobile.service";
import MobileCardComponent from "../mobile-card/mobile-card.component";

const MobileGridListComponent = () => {
  const [mobileList, setMobileList] = useState([]);
  const searchText = "";

  useEffect(() => {
    getAllMobiles({ searchText }).then((mobileList) => {
      setMobileList(mobileList);
    });
  }, []);

  return (
    <>
      <div className={styles["grid-header"]}>
        <h2 className={styles["title-grid"]}>#ElMóvilQueQuieres</h2>
        <div className={styles["search-wrapper"]}>
          <button className={styles["btn-search"] + ' btn-raised-primary'}><i className="fa-solid fa-search"></i></button>
          <input className={styles["searchText"]} name="searchText" placeholder="Escribe Acer..." type="text"></input>
        </div>
      </div>
      <div
        className={styles["mobile-grid-list"]}
        data-testid="mobile-grid-list"
      >
        {
          mobileList.map( mobile => (
            <MobileCardComponent key={ mobile.id } {...mobile}></MobileCardComponent>
          ))
        }
      </div>
    </>
  );
};

export default MobileGridListComponent;
