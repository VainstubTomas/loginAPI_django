import axios from "axios";

const url = 'http://127.0.0.1:8000/'

const alumnosApi = axios.create({
    baseURL: `${url}/api/v1/alumnos`,
});

export const getAlumnos = () => alumnosApi.get("/");
export const getAlumnoById = (id) => alumnosApi.get(`/${id}/`);
export const createAlumno = (alumno) => alumnosApi.post("/", alumno);
export const updateAlumno = (id, alumno) => alumnosApi.put(`/${id}/`, alumno);
export const deleteAlumno = (id) => alumnosApi.delete(`/${id}`);
