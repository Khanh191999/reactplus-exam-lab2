import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "https://5d36d86c86300e0014b647c7.mockapi.io/products",
    // headers: {
    //     'Content-Type': "multipart/form-data"
    // },
})