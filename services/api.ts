import axios from "axios";

export const api = axios.create({baseURL: "https://localhost:8080", timeout: 1000, headers: {Accept: "application/json", "Content-Type": "application/json"}});