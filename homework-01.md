# Proyecto M3 - Gestion de Turnos.

## User Stories

1. Como usuario invitado poder ver la información de la APP, además quiero poder registrarme y crear una cuenta nueva.
   - Quiero poder completar los diversos campos de mi perfil.
   - Quiero cargar una imagen personal. (Cloudinary)
   - Quiero poder registrar un email para tener la información precisa sobre mis turnos, confirmaciones y cancelaciones.
2. Como usuario registrado quiero poder iniciar sesión con mis credenciales. Usuario y contraseña
3. Como usuario registrado quiero poder reservar un turno.
   - Los slots deben ser cada media hora
   - No permitir dos turnos en el mismo dia
   - Quiero poder ver en que status se encuentra mi turno. (confirmado/cancelado).
4. Como usuario registrado quiero poder elegir la hora y la fecha de dicho turno
5. Como usuario registrado quiero poder cancelar mi turno. Recibir una confimacion antes de la cancelacion
6. Como usuario registrado quiero tener la capacidad de poder ver el historial de mis turnos.
7. Como usuario registrado quier poder recibir mauil de confirmacion (Nodemailer)
8. Como usuario registrado quiero poder cerrar sesión cuando no seguiré usando la plataforma.

## UX/UI

1.  Tematica de nuestra APP
2.  Home con información sobre la APP
3.  Redireccionarme automaticamente al home lugue del login
4.  Formularios:
    - Mostrar errores en tiempo real.
    - Que no se resetee.
    - Seguridad de contraseña.
    - Deshabilitar el boton hasta que todos los campos esten llenos.
    - Que sea Intuitivo y nos muestre el paso a paso
    - Que se despliegue el calendario para la solicitud de turno.

## Modelo Entidad/Relacion

1.  Usuarios
    - nombre
    - apellido
    - fecha de nacimiento
    - email
    - dni
    - telefono
    - ID
    - Foto de perfil
2.  Credenciales
    - Usuario
    - Passwo
    - ID
3.  Turnos

    - Fecha y hora
    - Status
    - ID

4.  Relaciones:
    - Usuarios 1:1 Credenciales @OneToOne.
    - Usuarios 1:N Turnos @OneToMany.
    - Turno N:1 Usuarios @ManyToOne.
