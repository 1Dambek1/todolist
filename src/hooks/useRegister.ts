
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import { useRouter } from "@tanstack/react-router";

export function useRegister() {
  const router = useRouter()
  
  return useMutation({
    mutationKey: ["register"],
    mutationFn: register,
    onSuccess: (data) => {
      console.log(data);
      router.navigate({to:"/dashboard/today"})
    },
    onError: (error) => {
      console.error("Error registering user:", error);
    },
  });
}