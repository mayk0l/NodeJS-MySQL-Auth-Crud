# NodeJS-MySQL-Auth-Crud

# Aplicación CRUD con Autenticación

Esta es una aplicación CRUD (Create, Read, Update, Delete) con autenticación de usuario, desarrollada utilizando Node.js, Express y MySQL.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar todas las dependencias.

## Configuración

1. Asegúrate de tener una base de datos MySQL configurada y actualiza los detalles de la conexión en el archivo `keys.js`.
2. Ejecuta el script SQL provisto en el archivo `database.sql` para crear la estructura de la base de datos necesaria.

## Uso

1. Ejecuta `npm start` para iniciar la aplicación.
2. Accede a la aplicación en tu navegador utilizando la URL `http://localhost:4000`.
3. Regístrate como usuario y luego inicia sesión con tus credenciales.
4. Explora las diferentes funcionalidades de la aplicación CRUD, como crear, leer, actualizar y eliminar registros.

## Dependencias utilizadas

- Express: framework web para Node.js.
- Express Handlebars: motor de plantillas para renderizar las vistas.
- Morgan: middleware para el registro de solicitudes HTTP.
- Connect Flash: mensajes flash para mostrar notificaciones al usuario.
- Express Session: manejo de sesiones de usuario.
- Express MySQL Session: almacenamiento de sesiones en una base de datos MySQL.
- Passport: autenticación de usuario.
- MySQL: cliente de MySQL para Node.js.

## Contribución

Si deseas contribuir a este proyecto, puedes realizar un fork del repositorio y enviar tus pull requests con las mejoras o correcciones propuestas.

## Autor

Maykol - [Github](https://github.com/mayk0l)

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.
