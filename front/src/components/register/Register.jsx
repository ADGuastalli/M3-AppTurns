import { useState } from "react";
import validate from "../../helpers/validate";
import styles from "../../styles/login/register.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/reducer";

const Register = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    birthdate: "",
    ndni: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "*",
    email: "*",
    birthdate: "*",
    ndni: "*",
    username: "*",
    password: "*",
    confirmPassword: "*",
  });

  const todosLosCamposLlenos = () => {
    return (
      userData.name !== "" &&
      userData.email !== "" &&
      userData.birthdate !== "" &&
      userData.ndni !== "" &&
      userData.username !== "" &&
      userData.password !== "" &&
      userData.confirmPassword !== ""
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newUserData = { ...userData, [name]: value };
    setUserData(newUserData);

    setErrors(
      validate(newUserData, [
        "name",
        "email",
        "birthdate",
        "ndni",
        "username",
        "password",
        "confirmPassword",
      ])
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      alert("Las contraseñas no coinciden");
    } else if (Object.keys(errors).length > 0) {
      alert("Por favor hay alguno de los campos que se encuentra incompleto");
    } else {
      try {
        const { confirmPassword, ...userDataWithoutConfirm } = userData;
        const response = await axios.post(
          "http://localhost:5000/users/register",
          userDataWithoutConfirm
        );
        console.log(response.data);
        dispatch(registerUser(response.data));

        localStorage.setItem("userData", JSON.stringify(response.data));

        alert(`Registro con exito =) Ahora puedes iniciar sesión`);
      } catch (error) {
        console.log(`Ha ocurrido un error: ${error}`);
      }
    }
  };
  return (
    <div className={styles.conteiner}>
      <h3 className={styles.h3}>Register</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>Apellido y Nombre: </label>
          <input
            style={{
              borderRadius: "30px",
              textAlign: "center",
              width: "100%",
              height: "25px",
            }}
            type="text"
            value={userData.name}
            name="name"
            placeholder="Apellido y Nombre"
            onChange={handleInputChange}
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label>Email: </label>
          <input
            style={{
              borderRadius: "30px",
              textAlign: "center",
              width: "100%",
              height: "25px",
            }}
            type="email"
            value={userData.email}
            name="email"
            placeholder="Ej: fullstackgym@gym.com"
            onChange={handleInputChange}
          />
          {errors.email && (
            <p
              style={{
                color: "red",
                fontSize: "15px",
                marginTop: "0px",
                textShadow: "1px 1px 1px black",
              }}
            >
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label>Fecha de Nacimiento: </label>
          <input
            style={{
              borderRadius: "30px",
              textAlign: "center",
              width: "100%",
              height: "25px",
            }}
            type="date"
            value={userData.birthdate}
            name="birthdate"
            onChange={handleInputChange}
          />

          {errors.birthdate && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.birthdate}
            </p>
          )}
        </div>
        <div>
          <label>N° DNI/LE/TP: </label>
          <input
            style={{
              borderRadius: "30px",
              textAlign: "center",
              width: "100%",
              height: "25px",
            }}
            type="number"
            value={userData.ndni}
            name="ndni"
            placeholder="DNI / LE / TP"
            onChange={handleInputChange}
          />
          {errors.ndni && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.ndni}
            </p>
          )}
        </div>

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
            <p
              style={{
                color: "red",
                fontSize: "15px",
                marginTop: "0px",
                textShadow: "1px 1px 1px black",
              }}
            >
              {errors.password}
            </p>
          )}
        </div>
        <div>
          <label>Confirmar Password: </label>
          <input
            style={{
              borderRadius: "30px",
              textAlign: "center",
              width: "100%",
              height: "25px",
            }}
            type="password"
            value={userData.confirmPassword}
            name="confirmPassword"
            placeholder="***********"
            onChange={handleInputChange}
          />
          {errors.confirmPassword && (
            <p
              style={{
                color: "red",
                fontSize: "15px",
                marginTop: "0px",
                textShadow: "1px 1px 1px black",
              }}
            >
              {errors.confirmPassword}
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
          disabled={!todosLosCamposLlenos()}
          className={styles.button}
          type="submit"
        >
          Enviar Registro
        </button>
      </form>
    </div>
  );
};

export default Register;
