import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3306/order",
  headers: {
    "Content-type": "application/json"
  }
});