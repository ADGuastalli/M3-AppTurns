"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
// Configuración del transporte de nodemailer
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: "fullstackgym@gmail.com",
        pass: "ttbwaobehjoaunjn",
    },
});
// Función para enviar el correo de confirmación
const sendConfirmationEmail = (userEmail, turnData) => {
    const mailOptions = {
        from: "fullstackgym@gmail.com",
        to: userEmail,
        subject: "Confirmación de turno",
        text: `¡Hola! Tu turno para ${turnData.description} con el entrenador ${turnData.coach} el ${turnData.date} a las ${turnData.time} ha sido registrado con éxito.`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error al enviar el correo:", error);
        }
        else {
            console.log("Correo enviado:", info.response);
        }
    });
};
exports.default = sendConfirmationEmail;
