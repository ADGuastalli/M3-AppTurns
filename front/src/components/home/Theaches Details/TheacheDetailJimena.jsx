import styles from "../../../styles/home/TheacheDetail.module.css";

const DetailJimena = ({ handleOnClouse }) => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.modalContent}>
        <p>
          Jimena Rodríguez (33 años, Argentina): Jimena es la instructora de
          spinning en FULL STACK GYM. Con una licenciatura en Ciencias del
          Deporte de la Universidad Nacional de La Plata y una certificación en
          Instrucción de Spinning, Jimena se dedica a proporcionar clases de
          spinning enérgicas y motivadoras que desafían a los miembros del
          gimnasio a superar sus límites.
        </p>
        <button onClick={handleOnClouse} className={styles.button}>
          Back
        </button>
      </div>
    </div>
  );
};

export default DetailJimena;
