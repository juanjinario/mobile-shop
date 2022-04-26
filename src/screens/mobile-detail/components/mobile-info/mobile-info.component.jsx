import PropTypes from "prop-types";
import styles from "./mobile-info.module.scss";

const MobileInfoComponent = ({
  battery,
  brand,
  cpu,
  dimentions,
  displayResolution,
  displayType,
  model,
  os,
  price,
  primaryCamera,
  ram,
  weight,
}) => {
  // Marca
  // Modelo
  // Precio
  // CPU
  // RAM
  // Sistema Operativo
  // Resolucion de pantalla
  // Bateria
  // Camaras
  // Dimensiones
  // Peso

  return (
    <div className={styles["mobile-info"]} data-testid="MobileInfo">
      <div className={styles["header"]}>
        <div>
          <small>{ brand }</small>
          <h3>{ model  }</h3>
        </div>
        <span className={styles["big-number"]}>{ price } €</span>
      </div>
      <table className={styles["info-table"]}>
        <tbody>
          <tr>
            <td>
              <b>Dimensiones</b>
              <p>{dimentions}</p>
              <p>peso: {weight} g</p>
            </td>
            <td>
              <b>SO</b>
              <p>{os}</p>
            </td>
            <td>
              <b>Pantalla</b>
              <p>{displayResolution}</p>
              <p>{displayType}</p>
            </td>
          </tr>
          <tr>
            <td>
              <b>Procesador</b>
              <p>{cpu}</p>
              <p>{ram}</p>
            </td>
            <td>
              <b>Cámara</b>
              <p>
                {primaryCamera?.isArray ? (
                  primaryCamera?.map((camera, index) => (
                    <span key={"cam" + index}>{camera} </span>
                  ))
                ) : (
                  <span>{primaryCamera}</span>
                )}
              </p>
            </td>
            <td>
              <b>Batería</b>
              <p>{battery}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div></div>
    </div>
  );
};

MobileInfoComponent.propTypes = {};
MobileInfoComponent.defaultProps = {};

export default MobileInfoComponent;
