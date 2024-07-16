import { useState } from "react";
import validate from "../../helpers/validate";
import styles from "../../styles/login/login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/reducer";

function Login() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "*",
    password: "*",
  });

  const todosLosCamposLlenos = () => {
    return userData.username !== "" && userData.password !== "";
  };

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newUserData = { ...userData, [name]: value };
    setUserData(newUserData);
    setErrors(validate(newUserData, ["username", "password"]));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.keys(errors).length > 0) {
      alert("Por favor hay alguno de los campos que se encuentra incompleto");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/login",
          userData
        );
        console.log("User data from login:", response.data);
        dispatch(registerUser(response.data));
        alert(`Logeado con exito, adelante puede ingresar a FULL STACK GYM`);
        navigate("/home");
      } catch (error) {
        alert(
          `Ocurrio un error en el Login. Puede que los datos ingresados sean incorrectos`
        );
      }
    }
  };

  return (
    <div className={styles.conteiner}>
      <h3 className={styles.h3}>Login</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            style={{
              borderRadius: "30px",
              textAlign: "center",
              width: "100%",
              height: "25px",
            }}
            type="text"
            value={userData.username}
            name="username"
            placeholder="Username"
            onChange={handleInputChange}
          />
          {errors.username && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.username}
            </p>
          )}
        </div>
        <div>
          <label>Password: </label>
          <input
            style={{
              borderRadius: "30px",
              textAlign: "center",
              width: "100%",
              height: "25px",
            }}
            type="password"
            value={userData.password}
            name="password"
            placeholder="***********"
            onChange={handleInputChange}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.password}
            </p>
          )}
        </div>
        <p
          style={{
            color: "red",
            fontSize: "20px",
            marginTop: "10px",
            textShadow: "1px 1px 1px black",
          }}
        >
          * Todos los campos son obligatorios
        </p>
        <button
          className={styles.button}
          disabled={!todosLosCamposLlenos()}
          type="submit"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
