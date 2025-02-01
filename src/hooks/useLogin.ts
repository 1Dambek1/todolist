import { login } from "@/api/auth"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "@tanstack/react-router"


export const useLogin = () =>{
    const router = useRouter()
    return useMutation({
        mutationKey: ["login"],
        mutationFn: login,
        onSuccess: (data) => {
            console.log(data)
            router.navigate({to: "/dashboard/today"})
        },
        onError: (error) => {
            console.log(error)
        }

    })
}