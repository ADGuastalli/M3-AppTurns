import styles from "../../../styles/home/TheacheDetail.module.css";

const DetailGisela = ({ handleOnClouse }) => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.modalContent}>
        <p>
          Gisela Fernández (28 años, Argentina): Gisela es la profesora de yoga
          en FULL STACK GYM. Después de obtener su certificación de instructora
          de yoga en la Escuela Argentina de Yoga, Gisela ha estado enseñando
          una variedad de estilos de yoga, incluyendo Hatha, Vinyasa y Yin, para
          ayudar a los miembros del gimnasio a encontrar su equilibrio y paz
          interior.
        </p>
        <button onClick={handleOnClouse} className={styles.button}>
          Back
        </button>
      </div>
    </div>
  );
};

export default DetailGisela;
