import styles from "../../../styles/home/TheacheDetail.module.css";

const DetailNicolas = ({ handleOnClouse }) => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.modalContent}>
        <p>
          Nicolás García (30 años, Argentina): Nicolás es el encargado de la
          musculación en FULL STACK GYM. Con un título en Ciencias del Ejercicio
          de la Universidad de Buenos Aires y una certificación avanzada en
          Entrenamiento de Fuerza y Acondicionamiento, Nicolás se especializa en
          ayudar a los miembros del gimnasio a alcanzar sus objetivos de fuerza
          y musculación.
        </p>
        <button onClick={handleOnClouse} className={styles.button}>
          Back
        </button>
      </div>
    </div>
  );
};

export default DetailNicolas;
