import styles from "../../styles/home/Turns.module.css";
import muscula from "../../assets/muscula.jpg";
import yoga from "../../assets/yoga.png";
import cicle from "../../assets/cicle.jpg";
import crossfit from "../../assets/crossfit.jpeg";
import { Link } from "react-router-dom";

const Turns = () => {
  return (
    <div className={styles.total}>
      <div>
        <h3 className={styles.h3}>Turnos</h3>
      </div>
      <div className={styles.Turns}>
        <div className={styles.conteiners}>
          <img className={styles.imag} src={muscula} alt="musculacion" />

          <Link to="/TurnoMusco" className={styles.button}>
            MUSCULACION
          </Link>
        </div>
        <div className={styles.conteiners}>
          <img className={styles.imag} src={yoga} alt="yoga" />
          <Link to="/TurnosYoga" className={styles.button}>
            YOGA
          </Link>
        </div>
        <div className={styles.conteiners}>
          <img className={styles.imag} src={cicle} alt="cicle" />
          <Link to="/TurnoSpinn" className={styles.button}>
            SPINNING
          </Link>
        </div>
        <div className={styles.conteiners}>
          <img className={styles.imag} src={crossfit} alt="crossfit" />
          <Link to="/TurnosCros" className={styles.button}>
            CROSSFIT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Turns;
