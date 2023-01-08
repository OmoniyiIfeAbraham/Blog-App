import axios from "axios";

const client = axios.create({ baseURL: "http://192.168.0.151:4848/api" });

export default client;
