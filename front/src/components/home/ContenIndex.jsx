import styles from "../../styles/home/ContenIndex.module.css";
import Conten1 from "./Conten1";
import Conten2 from "./Conten2";

const ContenIndex = () => {
  return (
    <div>
      <div className={styles.contein}>
        <div>
          <Conten1 />
        </div>
        <div>
          <Conten2 />
        </div>
      </div>
    </div>
  );
};

export default ContenIndex;
