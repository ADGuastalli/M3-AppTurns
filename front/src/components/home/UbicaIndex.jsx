import styles from "../../styles/home/UbicaIndex.module.css";
import Maps from "../../components/home/Maps";
import Hore from "../../components/home/Hore";
const UbicaIndex = () => {
  return (
    <div>
      <div className={styles.contein}>
        <div>
          <Maps />
        </div>
        <div>
          <Hore />
        </div>
      </div>
    </div>
  );
};

export default UbicaIndex;
