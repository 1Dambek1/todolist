import { LoginUserType } from "@/types/auth/LoginUser";
import { CreateUserType } from "../types/auth/CreateUserType";
import { api } from "./server";
import Cookies from "js-cookie"


export const register = async (data: CreateUserType) => {
    const response = await api.post("/auth/register", data);
    console.log(response.data);
    Cookies.set("token", response.data.token);
    return response.data;
}


export const login = async (data: LoginUserType) => {
    const response = await api.post("/auth/login", data);
    Cookies.set("token", response.data.token);
    return response.data;
}
export const GetCurrentUser = async () => {
    const response = await api.get("/auth/me",{
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
    return response.data;
}
