import axios from "axios";

const API_URL = axios.create({baseURL: "http://localhost:8000/chat/"});
//const API_URL = axios.create({baseURL: "http://localhost:8000/chat/"});

export const getUsuarios = data => API_URL.post("/usuarios/", data);

export const getMensajes = data => API_URL.post("/mensajes/", data);

export const chatBot = data => API_URL.post("/chat-bot/", data);

export const enviarMensaje = data => API_URL.post("/mensaje/", data);