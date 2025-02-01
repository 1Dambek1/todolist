import { Link } from "@tanstack/react-router";
import { Facebook, Github } from "lucide-react";
import { useRegister } from "../../hooks/useRegister";
import { registerSchema, RegisterSchema } from "../../lib/schemas";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormField } from "@/components/ui/form";
import { z } from "zod";

export function RegisterForm() {

  const RegisterForm = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "all"
  });

  const {mutate: registerUser} = useRegister()
 
  function RegisterOnSubmit(data: RegisterSchema ){
    console.log(data);
    
  }
  return (
    <div className="w-2/4 border-2 border-gray-200 rounded-lg p-6 h-fit shadow-lg bg-white">
        <div className="text-3xl font-bold mb-4 text-center text-gray-800">
            Создать аккаунт
        </div>

        <div className="">
            <Form {...RegisterForm}>
                <form onSubmit={RegisterForm.handleSubmit(RegisterOnSubmit)}  className="flex flex-col gap-4">
                    <FormField control={RegisterForm.control} name="email" render={({field}) => (
                        <div>
                            <input 
                            {...field} 
                            type="text" 
                            placeholder="Email" 
                            className="w-full hover:border-gray-400 border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition duration-200" />
                            {RegisterForm.formState.errors.email && (
                                <span className="text-red-500 text-sm">{RegisterForm.formState.errors.email.message}</span>
                            )}
                        </div>
                    )}/>
                    <FormField control={RegisterForm.control} name="username" render={({field}) => (
                        <div>
                            <input {...field} type="text" placeholder="username" 
                                className="w-full hover:border-gray-400 border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition duration-200" />
                            {RegisterForm.formState.errors.username && (
                                <span className="text-red-500 text-sm">{RegisterForm.formState.errors.username.message}</span>
                            )}
                        </div>
                    )}/>
                    <FormField control={RegisterForm.control} name="password" render={({field}) => (
                        <div>
                            <input {...field} type="password" placeholder="Password" 
                                className="w-full hover:border-gray-400 border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition duration-200" />
                            {RegisterForm.formState.errors.password && (
                                <span className="text-red-500 text-sm">{RegisterForm.formState.errors.password.message}</span>
                            )}
                        </div>
                    )}/>
                    
                    <button type="submit" className="bg-red-light text-white rounded-lg p-3 hover:bg-red-dark transition duration-200">
                        Зарегистрироваться
                    </button>
                </form>
            </Form>
            
        </div>

        <div className="text-sm text-gray-600 mt-4 text-center">
            Уже есть аккаунт? <Link to="/auth/login" className="text-red-light  hover:text-red-dark transition duration-200">Войти</Link>
        </div>

        <div className="flex items-center text-center gap-2 justify-center mt-4">
            <span className="flex-grow border-t border-gray-300"></span>
            <span className="px-2 text-gray-600">Или создать аккаунт с помощью</span>
            <span className="flex-grow border-t border-gray-300"></span>
        </div>
        <div className="flex gap-4 justify-center mt-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition duration-200"><Github size={24}/></button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition duration-200"><Facebook size={24}/></button>
        </div>
    </div>
  );
}