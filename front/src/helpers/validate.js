const validate = (values, fieldsToValidate) => {
  const errors = {};

  if (fieldsToValidate.includes("name") && !values.name) {
    errors.name = "*";
  }

  if (
    fieldsToValidate.includes("email") &&
    (!values.email || !/\S+@\S+\.\S+/.test(values.email))
  ) {
    errors.email = "* Formato de email incorrecto";
  }

  if (fieldsToValidate.includes("birthdate") && !values.birthdate) {
    errors.birthdate = "*";
  }

  if (fieldsToValidate.includes("ndni") && !values.ndni) {
    errors.ndni = "*";
  }

  if (fieldsToValidate.includes("username") && !values.username) {
    errors.username = "*";
  } else if (values.username && values.username.length < 4) {
    errors.username = "El UserName debe ser mayor a 4 caracteres";
  }

  if (fieldsToValidate.includes("password") && !values.password) {
    errors.password = "*";
  } else if (values.password && values.password.length < 8) {
    errors.password = "El Password debe ser mayor a 8 caracteres";
  }

  if (
    fieldsToValidate.includes("confirmPassword") &&
    values.password !== values.confirmPassword
  ) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  //Turnos

  if (fieldsToValidate.includes("date")) {
    if (!values.date) {
      errors.date = "*";
    } else {
      const inputDate = new Date(values.date + "T00:00Z"); // Añadir 'Z' para indicar que es UTC
      const tomorrow = new Date();
      tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
      tomorrow.setUTCHours(7, 59, 0, 0); // Usar setUTCHours en lugar de setHours

      if (inputDate < tomorrow) {
        errors.date = "No puedes reservar turnos para el día de hoy.";
      } else if (inputDate.getUTCDay() === 0) {
        // Usar getUTCDay en lugar de getDay
        errors.date = "No puedes reservar turnos para los días domingos.";
      }
    }
  }

  if (fieldsToValidate.includes("time")) {
    if (!values.time) {
      errors.time = "*";
    } else {
      const [hour, minute] = values.time.split(":").map(Number);
      const totalMinutes = hour * 60 + minute;
      const startMinutes = 7 * 60 + 59; // Cambiar a 7:59 AM
      const endMinutes = 19 * 60 + 1; // Cambiar a 7:01 PM

      if (totalMinutes < startMinutes || totalMinutes > endMinutes) {
        errors.time =
          "Por favor, ingresa un horario entre las 7:59 AM y las 7:01 PM.";
      }
    }
  }

  if (fieldsToValidate.includes("description") && !values.description) {
    errors.description = "*";
  }

  if (fieldsToValidate.includes("coach") && !values.coach) {
    errors.coach = "*";
  }

  return errors;
};

export default validate;
