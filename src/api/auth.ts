import { CreateUserType } from "../types/auth/CreateUserType";
import { api } from "./server";


export const register = async (data: CreateUserType) => {
    const response = await api.post("/auth/register", data);
    console.log(response.data);
    
    return response.data;
}

