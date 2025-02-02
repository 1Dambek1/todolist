import { api } from "./server";
import Cookies from "js-cookie"


export const get_category = async () => {
    const response = await api.get("tasks/categories",{
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
    return response.data;
}