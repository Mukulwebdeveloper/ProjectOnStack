import axios from "axios";

const API = axios.create({ baseURL: "http//localhost:5000" });

export const signUp = (authData) =>{
    console.log(authData);

    return API.post("/user/signup", authData);
} 
export const logIn= (authData) => API.post("/user/login", authData);

































// export const logIn = (authData) => API.post("/user/login", authData);