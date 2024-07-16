import { useState, useEffect } from "react";
import validate from "../../helpers/validate";
import styles from "../../styles/turnos/RegisterTurnos.module.css";
import axios from "axios";
import Footer from "../../components/home/Footer";
import { addTurn } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";

function TurnosCros() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const id =
    user && user.user && user.user.user && user.user.user.id
      ? user.user.user.id
      : null;

  const [turnoData, setTurnosData] = useState({
    date: "",
    time: "",
    description: "",
    coach: "",
  });

  const [errors, setErrors] = useState({
    date: "*",
    time: "*",
    description: "*",
    coach: "*",
  });

  const todosLosCamposLlenos = () => {
    return (
      turnoData.date !== "" &&
      turnoData.time !== "" &&
      turnoData.description !== "" &&
      turnoData.coach !== ""
    );
  };

  const handleInputChange = (event) => {
    const { name, type } = event.target;
    let value;
    if (type === "checkbox") {
      if (name === "description") {
        value = event.target.checked ? "Crossfit" : "";
      } else if (name === "coach") {
        value = event.target.checked ? "Marcos" : "";
      }
    } else {
      value = event.target.value;
    }
    const newTurnoData = { ...turnoData, [name]: value };
    setTurnosData(newTurnoData);
    setErrors(validate(newTurnoData, ["date", "time", "description", "coach"]));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.values(errors).some((error) => error !== "")) {
      alert("Por favor hay alguno de los campos que se encuentra incompleto");
    } else {
      try {
        const newTurnoData = {
          date: turnoData.date,
          time: turnoData.time,
          userId: id,
          status: "active",
          description: "Crossfit",
          coach: "Marcos",
        };
        console.log(newTurnoData);
        // Enviar la solicitud POST al backend con los nuevos datos del turno
        const response = await axios.post(
          "http://localhost:5000/appointments/schedule",
          newTurnoData
        );
        console.log(response.data);
        dispatch(addTurn(response.data));
        alert(
          "Reserva de turno con éxito, se le ha enviado un correo con la confirmación de su turno"
        );
      } catch (error) {
        console.log(`Ha ocurrido un error: ${error}`);
        alert(
          "Ocurrió un error en la reserva del turno. Puede que los datos ingresados sean incorrectos."
        );
      }
    }
  };

  useEffect(() => {
    if (!id) {
      console.error("User ID is not defined");
      alert("Error: User ID is not defined. Please log in again.");
    }
  }, [id]);

  return (
    <div className={styles.conteinerCros}>
      <h3 className={styles.h3}>Turno Crossfit</h3>
      <div className={styles.texForm}>
        <div className={styles.texto}>
          <h4>
            En FULL STACK GYM, nuestro programa de Crossfit es desafiante pero
            gratificante. Combina levantamiento de pesas, gimnasia y ejercicios
            cardiovasculares para un entrenamiento completo. Nuestros
            entrenadores certificados te ayudarán a escalar los movimientos para
            que puedas trabajar a tu propio ritmo. Si estás listo para llevar tu
            condición física al siguiente nivel, ¡reserva tu turno en nuestra
            clase de Crossfit!
          </h4>
        </div>
        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="date">Fecha: </label>
              <input
                style={{
                  borderRadius: "30px",
                  textAlign: "center",
                  width: "100%",
                  height: "25px",
                }}
                type="date"
                value={turnoData.date}
                name="date"
                id="date"
                onChange={handleInputChange}
              />
              {errors.date && (
                <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
                  {errors.date}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="time">Horario: </label>
              <input
                style={{
                  borderRadius: "30px",
                  textAlign: "center",
                  width: "100%",
                  height: "25px",
                }}
                type="time"
                value={turnoData.time}
                name="time"
                id="time"
                min="08:00"
                max="19:00"
                step="3600"
                onChange={handleInputChange}
              />
              {errors.time && (
                <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
                  {errors.time}
                </p>
              )}
            </div>
            <label>Clase: </label>
            <div>
              <label htmlFor="description" style={{ marginLeft: "10px" }}>
                Crossfit
              </label>
              <input
                style={{
                  borderRadius: "30px",
                  width: "8%",
                  height: "25px",
                }}
                type="checkbox"
                checked={turnoData.description === "Crossfit"}
                name="description"
                id="description"
                onChange={handleInputChange}
              />
              {errors.description && (
                <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
                  {errors.description}
                </p>
              )}
            </div>
            <label>Coach: </label>
            <div>
              <label htmlFor="coach" style={{ marginLeft: "10px" }}>
                Marcos
              </label>
              <input
                style={{
                  borderRadius: "30px",
                  width: "8%",
                  height: "25px",
                }}
                type="checkbox"
                checked={turnoData.coach === "Marcos"}
                name="coach"
                id="coach"
                onChange={handleInputChange}
              />
              {errors.coach && (
                <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
                  {errors.coach}
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
              disabled={!todosLosCamposLlenos() || !id}
              type="submit"
            >
              Reservar Turno
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TurnosCros;
