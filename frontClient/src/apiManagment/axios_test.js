import axios from "axios";

const url = 'http://127.0.0.1:8000/'

const userApi = axios.create({
    baseURL: `${url}/api/v1/user`,
});

export const getUsers = () => userApi.get("/");
export const getuserById = (id) => userApi.get(`/${id}/`);
export const createuser = (user) => userApi.post("/", user);
export const updateuser = (id, user) => userApi.put(`/${id}/`, user);
export const deleteuser = (id) => userApi.delete(`/${id}`);
