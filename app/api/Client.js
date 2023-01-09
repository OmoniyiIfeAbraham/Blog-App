import axios from "axios";

const client = axios.create({ baseURL: "https://blog-app-backend-api.up.railway.app/api" });

export default client;
