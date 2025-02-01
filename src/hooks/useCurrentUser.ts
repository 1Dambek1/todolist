import { useQuery } from "@tanstack/react-query";
import { GetCurrentUser } from "@/api/auth";

export const UseCurrentUser = () =>{
    return useQuery({
        queryKey: ["current-user"],
        queryFn: GetCurrentUser,

    })
}