import axios from "axios";

const cleanBotApi = axios.create({
  baseURL: "http://127.0.0.1:8000/cleanbot/",
});

export const loginUser = (credentials) => {
  return cleanBotApi.post("users-api/login/", credentials);
};

export const createUser = (user) => {
  return cleanBotApi.post("users-api/users/", user);
};
