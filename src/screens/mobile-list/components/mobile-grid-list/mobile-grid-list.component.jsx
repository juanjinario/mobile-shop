import { useEffect, useState } from "react";
import styles from "./mobile-grid-list.module.scss";
import { getAllMobiles } from "../../../../core/services/mobile.service";
import MobileCardComponent from "../mobile-card/mobile-card.component";

const MobileGridListComponent = () => {
  const [mobileList, setMobileList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getMobileList({});
  }, []);

  const getMobileList = ({ searchText = "" }) => {
    getAllMobiles({ searchText }).then((mobileList) => {
      setMobileList(mobileList);
    });
  };

  const getFilteredMobiles = () => {
    getMobileList({ searchText });
  };

  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles["grid-header"]}>
        <h2 className={styles["title-grid"]}>#ElMóvilQueQuieres</h2>
        <form className={`${ styles["search-wrapper"] } animate__animated animate__fadeIn`} onSubmit={ onSubmit }>
          <button
            className={styles["btn-search"] + " btn-raised-primary"}
            onClick={getFilteredMobiles}
            type="submit"
          >
            <i className="fa-solid fa-search"></i>
          </button>
          <input
            className={styles["searchText"]}
            name="searchText"
            placeholder="Escribe Acer..."
            type="text"
            value={searchText}
            onChange={onChangeSearchText}
          ></input>
        </form>
      </div>
      <div
        className={ `${styles["mobile-grid-list"]} animate__animated animate__fadeIn` }
        data-testid="mobile-grid-list"
      >
        {mobileList.map((mobile) => (
          <MobileCardComponent
            key={mobile.id}
            {...mobile}
          ></MobileCardComponent>
        ))}
      </div>
    </>
  );
};

export default MobileGridListComponent;
