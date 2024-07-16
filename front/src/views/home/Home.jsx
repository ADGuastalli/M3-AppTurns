import Footer from "../../components/home/Footer";
import Turns from "../../components/home/Turns";
import ContenIndex from "../../components/home/ContenIndex";
import Teacher from "../../components/home/Theacher";
import TitleIndex from "../../components/home/TitleIndex";
import style from "../../styles/home/TitleIndex.module.css";
import UbicaIndex from "../../components/home/UbicaIndex";

const Home = () => {
  return (
    <div>
      <div>
        <div className={style.conteiner}>
          <TitleIndex />
        </div>
        <div>
          <Turns />
        </div>
        <div>
          <ContenIndex />
        </div>
        <div>
          <Teacher />
        </div>
        <div>
          <UbicaIndex />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
