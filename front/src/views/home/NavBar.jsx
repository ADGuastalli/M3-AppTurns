import style from "../../styles/home/NavBar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/reducer";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirm = window.confirm("¿Estas seguro que deseas cerrar sesion?");
    if (confirm) {
      dispatch(
        registerUser({
          login: false,
          user: { id: false },
        })
      );
      navigate("/");
    }
  };

  return (
    <div className={style.navbar}>
      <Link to="/Home" className={style.buttons}>
        Home
      </Link>
      <NavLink to="/TurnoMusco" className={style.buttons}>
        Musculacion
      </NavLink>
      <Link to="/TurnosYoga" className={style.buttons}>
        Yoga
      </Link>
      <Link to="/TurnoSpinn" className={style.buttons}>
        Spinning
      </Link>
      <Link to="/TurnosCros" className={style.buttons}>
        Crossfit
      </Link>
      <Link to="/MisTurnos" className={style.buttons}>
        Mis Turnos
      </Link>
      <Link to="/MiPerfil" className={style.buttons}>
        Mi Perfil
      </Link>
      <Link to="/" onClick={handleLogout} className={style.buttons}>
        Cerrar Sesion
      </Link>
    </div>
  );
};

export default NavBar;
