import axios from "axios";

export const fastapi = axios.create({
  baseURL: "http://localhost:8000",
});
