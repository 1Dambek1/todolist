
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";

export function useRegister() {
  
  return useMutation({
    mutationKey: ["register"],
    mutationFn: register,
    onSuccess: () => {
      console.log("User registered successfully");
    },
    onError: (error) => {
      console.error("Error registering user:", error);
    },
  });
}