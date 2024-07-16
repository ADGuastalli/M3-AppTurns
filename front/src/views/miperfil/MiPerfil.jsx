import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/perfil/miPerfil.module.css";

const MiPerfil = () => {
  const user = useSelector((state) => state.user.user.user);

  const birthdate = new Date(user.birthdate).toLocaleDateString("es-AR");

  return (
    <div className={styles.conteiner}>
      <div className={styles.datos}>
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Fecha de nacimiento: {birthdate}</p>
      </div>
    </div>
  );
};

export default MiPerfil;
