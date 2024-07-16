import styles from "../../styles/home/Theacher.module.css";
import muscula from "../../assets/prof1.jpeg";
import yoga from "../../assets/prof2.jpg";
import cicle from "../../assets/prof3.jpg";
import crossfit from "../../assets/prof4.jpg";
import { useState } from "react";
import DetailNicolas from "./Theaches Details/TheacheDetailNicolas";
import DetailGisela from "./Theaches Details/TeacheDetailGisela";
import DetailJimena from "./Theaches Details/TheacheDetailJimena";
import DetailMarcos from "./Theaches Details/TeacheDetailMarcos";

const Teacher = () => {
  const [detailNicolas, setDetailNicolas] = useState(false);
  const [detailGisela, setDetailGisela] = useState(false);
  const [detailjimena, setDetailJimena] = useState(false);
  const [detailMarcos, setDetailMarcos] = useState(false);

  const handleOnClickNicolas = () => {
    setDetailNicolas(true);
  };
  const handelOnClickGisela = () => {
    setDetailGisela(true);
  };
  const handelOnClickJimena = () => {
    setDetailJimena(true);
  };
  const handelOnClickMarcos = () => {
    setDetailMarcos(true);
  };

  const handleOnClouse = () => {
    setDetailNicolas(false);
    setDetailGisela(false);
    setDetailJimena(false);
    setDetailMarcos(false);
  };

  return (
    <div className={styles.total}>
      <div>
        <h3 className={styles.h3}>Coaches</h3>
      </div>
      <div className={styles.Turns}>
        <div className={styles.conteiners}>
          <h2 className={styles.h2}>MUSCULACION</h2>
          <img className={styles.imag} src={muscula} alt="musculacion" />

          <button onClick={handleOnClickNicolas} className={styles.button}>
            NICOLAS
          </button>
          {detailNicolas && <DetailNicolas handleOnClouse={handleOnClouse} />}
        </div>

        <div className={styles.conteiners}>
          <h2 className={styles.h2}>YOGA</h2>
          <img className={styles.imag} src={yoga} alt="yoga" />
          <button onClick={handelOnClickGisela} className={styles.button}>
            GISELA
          </button>
          {detailGisela && <DetailGisela handleOnClouse={handleOnClouse} />}
        </div>
        <div className={styles.conteiners}>
          <h2 className={styles.h2}>SPINNING</h2>
          <img className={styles.imag} src={cicle} alt="cicle" />
          <button onClick={handelOnClickJimena} className={styles.button}>
            JIMENA
          </button>
          {detailjimena && <DetailJimena handleOnClouse={handleOnClouse} />}
        </div>
        <div className={styles.conteiners}>
          <h2 className={styles.h2}>CROSSFIT</h2>
          <img className={styles.imag} src={crossfit} alt="crossfit" />
          <button onClick={handelOnClickMarcos} className={styles.button}>
            MARCOS
          </button>
          {detailMarcos && <DetailMarcos handleOnClouse={handleOnClouse} />}
        </div>
      </div>
    </div>
  );
};

export default Teacher;
