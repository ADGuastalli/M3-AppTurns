import React, { useEffect } from "react";
import UnicoTurno from "../../components/turnos/UnicoTurno";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styles from "../../styles/turnos/MisTurnos.module.css";

const MisTurnos = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const id = user.user.user.id;

  const [turns, setTurns] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/appointments/${id}`)
      .then((res) => {
        setTurns(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, [user, dispatch, id]);

  return (
    <div className={styles.conteiner}>
      <h1 className={styles.h1}>MisTurnos</h1>
      {turns.length > 0 ? (
        turns.map((turn) => {
          return <UnicoTurno key={turn.id} turn={turn} />;
        })
      ) : (
        <p>No hay turnos agendados para este usuario.</p>
      )}
    </div>
  );
};

export default MisTurnos;
