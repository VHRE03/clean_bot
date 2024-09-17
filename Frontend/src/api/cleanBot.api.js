import axios from "axios";

// Crear una instancia de Axios con una configuración base para la API de CleanBot
const cleanBotApi = axios.create({
  baseURL: "http://127.0.0.1:8000/cleanbot/", // Establece la URL base de la API de CleanBot
});

// Función para iniciar sesión
// Envía una solicitud POST a la ruta "users-api/login/" con las credenciales del usuario
export const loginUser = (credentials) => {
  return cleanBotApi.post("users-api/login/", credentials);
  // credentials es un objeto que debe contener los datos de inicio de sesión como username y password
};

// Función para crear un nuevo usuario
// Envía una solicitud POST a la ruta "users-api/users/" con los datos del nuevo usuario
export const createUser = (user) => {
  return cleanBotApi.post("users-api/users/", user);
  // user es un objeto que debe contener los datos para el registro de un nuevo usuario (username, password, etc.)
};

// Función para obtener todos los usuarios
// Envía una solicitud GET a la ruta "users-api/users/"
export const getAllUsers = () => {
  return cleanBotApi.get("users-api/users/");
};
