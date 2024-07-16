import React, { useState } from "react";
import style from "../../styles/turnos/TurnoIndividual.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cancelTurn } from "../../redux/reducer";

const UnicoTurno = ({ turn }) => {
  const [localTurn, setLocalTurn] = useState(turn);
  const dispatch = useDispatch();

  const fecha = new Date(localTurn.date);

  // Formatear la fecha en el formato 'año/mes/día'
  const fechaFormateada = `${fecha.getDate()} / ${
    fecha.getMonth() + 1
  } / ${fecha.getFullYear()}`;

  const handleClick = async () => {
    try {
      if (
        window.confirm(
          `¿ESTA SEGURO DE QUE DESEA CANCELAR ESTE TURNO DE ${localTurn.description.toUpperCase()} DEL DIA ${fechaFormateada}?`
        )
      ) {
        const response = await axios.put(
          `http://localhost:3000/appointments/cancel/${localTurn.id}`
        );
        dispatch(cancelTurn(response.data));
        alert(
          `TU TURNO DE ${localTurn.description.toUpperCase()} HA SIDO CANCELADO, ESPERO QUE VUELVAS PRONTO!`
        );
        setLocalTurn((prevTurn) => ({
          ...prevTurn,
          status: "cancelled",
        }));
      }
    } catch (error) {
      console.error("Error al cancelar turno:", error);
      alert("Error al cancelar turno");
    }
  };

  return (
    <div className={style.turno}>
      <h4>Turno: {localTurn.time}</h4>
      <h4>Fecha: {fechaFormateada}</h4>
      <h4>Actividad: {localTurn.description}</h4>
      <h4>Coach: {localTurn.coach}</h4>
      <h4>
        Estado:{" "}
        {localTurn.status === "active" ? (
          <span className={style.active}>{localTurn.status.toUpperCase()}</span>
        ) : (
          <span className={style.cancelled}>
            {localTurn.status.toUpperCase()}
          </span>
        )}
      </h4>
      {localTurn.status === "active" && (
        <button onClick={handleClick} className={style.button}>
          Cancelar Turno
        </button>
      )}
    </div>
  );
};

export default UnicoTurno;
