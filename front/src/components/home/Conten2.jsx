import styles from "../../styles/home/Conten2.module.css";
import img2 from "../../assets/imgGim2.jpeg";

const Conten2 = () => {
  return (
    <div>
      <div className={styles.conteiner}>
        <img className={styles.img} src={img2} alt="LogoGim2" />
        <div className={styles.parrafo}>
          <h4>¡Únete a FULL STACK GYM hoy!</h4>
          <p>
            ¿Estás listo para llevar tu fitness al siguiente nivel? ¡Regístrate
            en <b>FULL STACK GYM</b>! Al registrarte, podrás reservar turnos
            para nuestras diversas disciplinas y asegurarte de que tu
            entrenamiento se ajuste a tu horario.
          </p>{" "}
          <p>
            Ya sea que te interese el yoga, el entrenamiento de fuerza, el
            spinning o cualquier otra de nuestras emocionantes clases, la
            inscripción te dará acceso completo. No pierdas la oportunidad de
            transformar tu vida a través del fitness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conten2;
