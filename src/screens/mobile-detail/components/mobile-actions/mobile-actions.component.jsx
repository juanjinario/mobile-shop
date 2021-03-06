import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./mobile-actions.module.scss";
import { useNavigate } from "react-router-dom";
import { addMobileToCart } from "../../../../core/services/cart.service";

const MobileActionsComponent = ({ mobileId, colors, storages, price = "" }) => {
  const [userSelection, setUserSelection] = useState({});
  const [productsAdded, productsAddedSelection] = useState({
    count: 0,
    showMessage: false,
  });

  useEffect(() => {
    setUserSelection({
      colorCode: colors?.[0].code,
      mobileId: mobileId,
      storageCode: storages?.[0].code,
    });
  }, [mobileId]);

  const onSelectColor = (colorSelected) => {
    setUserSelection((userSelection) => ({
      ...userSelection,
      colorCode: colorSelected.code,
    }));
  };

  const onSelectStorage = (storageSelected) => {
    setUserSelection((userSelection) => ({
      ...userSelection,
      storageCode: storageSelected.code,
    }));
  };

  const onAddToCart = () => {
    addMobileToCart({ ...userSelection }).then((result) => {
      productsAddedSelection({
        count: result.count,
        showMessage: true,
      });
      setTimeout(() => {
        productsAddedSelection({
          count: result.count,
          showMessage: false,
        });
      }, 4000);
    });
  };

  return (
    <div className={styles["mobile-actions"]} data-testid="MobileCard">
      <div className={styles["row-selectors"]}>
        <div>
          <b className={styles["switcher-name"]}>Color</b>
          <div className={styles["switcher"]}>
            {colors?.length &&
              colors.map((color, index) => (
                <div
                  className={
                    userSelection?.colorCode === color.code
                      ? `${styles["button-switch"]} ${styles["active"]}`
                      : styles["button-switch"]
                  }
                  onClick={() => onSelectColor(color)}
                  key={color.code}
                >
                  {color.name}
                </div>
              ))}
          </div>
        </div>
        <div>
          <b className={styles["switcher-name"]}>Almacenamiento</b>
          <div className={styles["switcher"]}>
            {colors?.length &&
              storages.map((storage, index) => (
                <div
                  className={
                    userSelection?.storageCode === storage.code
                      ? `${styles["button-switch"]} ${styles["active"]}`
                      : styles["button-switch"]
                  }
                  onClick={() => onSelectStorage(storage)}
                  key={storage.code}
                >
                  {storage.name}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles["row-main-button"]}>
        <button
          className={`${styles["btn-big"]} btn-raised-primary animate__animated animate__zoomIn animate__faster`}
          disabled={price === "" || price <= 0}
          onClick={onAddToCart}
        >
          {price !== "" ? (
            <>
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="animate__animated animate__fadeInRight"> A??adir por {price} ???</span>
            </>
          ) : (
            "Producto sin precio"
          )}
        </button>
      </div>
      {productsAdded.count > 0 && productsAdded.showMessage && (
        <div className="alert-success animate__animated animate__fadeInDown">
          Producto a??adido al carrito de compras
        </div>
      )}
    </div>
  );
};

MobileActionsComponent.propTypes = {};
MobileActionsComponent.defaultProps = {};

export default MobileActionsComponent;
