import styles from "../../styles/home/Conten1.module.css";
import img1 from "../../assets/imagGim.jpg";

const Conten1 = () => {
  return (
    <div>
      <div className={styles.conteiner}>
        <img className={styles.img} src={img1} alt="LogoGim1" />
        <p className={styles.parrafo}>
          En <b>FULL STACK GYM</b>, transformamos vidas a través del fitness.
          Ofrecemos programas de entrenamiento para todos los niveles, con
          entrenadores profesionales y equipos de alta calidad. Ya sea que
          busques perder peso, ganar músculo o mejorar tu salud, tenemos lo que
          necesitas. ¡Únete a nosotros hoy y comienza tu viaje hacia una vida
          más saludable!
        </p>
      </div>
    </div>
  );
};

export default Conten1;
