import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      localStorage.getItem("token") &&
      "Bearer " + localStorage.getItem("token"),
  },
});

export default instance;
