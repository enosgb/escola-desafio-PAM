import axios from "axios";

const urlDev = "http://127.0.0.1:8000";

export default axios.create({ baseURL: urlDev });
