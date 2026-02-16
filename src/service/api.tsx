import axios from "axios";

export const api = axios.create({
    baseURL: "https://dummyjson.com/",
    url: "http://localhost:4000",
    headers: {
        "Content-Type": "applications/json",
    },
});
