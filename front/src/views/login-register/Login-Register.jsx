import styles from "../../styles/login/loginHome.module.css";
import Login from "../../components/register/Login";
import Register from "../../components/register/Register";
import Footer from "../../components/home/Footer";

const LoginRegister = () => {
  return (
    <div>
      <div className={styles.conteiner}>
        <h1>FULL STACK GYM</h1>
        <div className={styles.logis}>
          <div>
            <Login />
          </div>
          <div>
            <Register />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginRegister;
