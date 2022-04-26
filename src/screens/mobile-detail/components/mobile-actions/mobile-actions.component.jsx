import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./mobile-actions.module.scss";
import { useNavigate } from "react-router-dom";

const MobileActionsComponent = ({ mobileId, colors, storages, price }) => {
  const [userSelection, setUserSelection] = useState({});

  useEffect(() => {
    setUserSelection({
      color: colors?.[0].code,
      mobileId: mobileId,
      storage: storages?.[0].code,
    });
  }, [mobileId]);

  const onSelectColor = (colorSelected) => {
    setUserSelection((userSelection) => ({
      ...userSelection,
      color: colorSelected.code,
    }));
  };

  const onSelectStorage = (storageSelected) => {
    setUserSelection((userSelection) => ({
      ...userSelection,
      storage: storageSelected.code,
    }));
  };

  const onAddToCart = () => {
    console.log(userSelection);
  };

  return (
    <div className={styles["mobile-actions"]} data-testid="MobileCard">
      <div className={styles["row-action"]}>
        <div>
          <b className={ styles["switcher-name"] } >Color</b>
          <div className={ styles["switcher"] }>
            {colors?.length &&
              colors.map((color, index) => (
                <div
                className={userSelection?.color === color.code ? `${styles['button-switch']} ${styles['active']}` : styles["button-switch"]}
                  onClick={() => onSelectColor(color)}
                  key={color.code}
                >
                  {color.name}
                </div>
              ))}
          </div>
        </div>
        <div>
          <b className={ styles["switcher-name"] }>Almacenamiento</b>
          <div className={ styles["switcher"] }>
            {colors?.length &&
              storages.map((storage, index) => (
                <div
                  className={userSelection?.storage === storage.code ? `${styles['button-switch']} ${styles['active']}` : styles["button-switch"]}
                  onClick={() => onSelectStorage(storage)}
                  key={storage.code}
                >
                  {storage.name}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles["row-action"]}>
        <span className={styles["txt-big"]}>{price} €</span>
        <button
          className={styles["btn-big"] + " btn-raised-primary"}
          onClick={onAddToCart}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span> Añadir</span>
        </button>
      </div>
    </div>
  );
};

MobileActionsComponent.propTypes = {};
MobileActionsComponent.defaultProps = {};

export default MobileActionsComponent;
