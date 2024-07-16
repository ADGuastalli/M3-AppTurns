import nodemailer from "nodemailer";

// Configuración del transporte de nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fullstackgym@gmail.com",
    pass: "ttbwaobehjoaunjn",
  },
});

interface TurnData {
  date: string;
  time: string;
  description: string;
  coach: string;
}

// Función para enviar el correo de confirmación
const sendConfirmationEmail = (userEmail: string, turnData: TurnData) => {
  const mailOptions = {
    from: "fullstackgym@gmail.com",
    to: userEmail,
    subject: "Confirmación de turno",
    text: `¡Hola! Tu turno para ${turnData.description} con el entrenador ${turnData.coach} el ${turnData.date} a las ${turnData.time} ha sido registrado con éxito.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error al enviar el correo:", error);
    } else {
      console.log("Correo enviado:", info.response);
    }
  });
};

export default sendConfirmationEmail;
