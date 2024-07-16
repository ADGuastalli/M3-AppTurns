import styles from "../../../styles/home/TheacheDetail.module.css";

const DetailMarcos = ({ handleOnClouse }) => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.modalContent}>
        <p>
          Marcos Pérez (27 años, Argentina): Marcos es el profesor de CrossFit
          en FULL STACK GYM. Después de obtener su certificación de Nivel 1 de
          CrossFit y su título en Kinesiología de la Universidad Nacional de
          Córdoba, Marcos ha estado diseñando y liderando clases de CrossFit que
          son tanto desafiantes como accesibles para todos los niveles de
          condición física.
        </p>
        <button onClick={handleOnClouse} className={styles.button}>
          Back
        </button>
      </div>
    </div>
  );
};

export default DetailMarcos;
