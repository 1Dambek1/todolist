import { useLogin } from "@/hooks/useLogin";
import { loginSchema, LoginSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { Facebook, Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormField } from "../ui/form";

export function AuthForm() {

    const AuthForm = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: "onChange"
    })

    const { mutate: login } = useLogin()

    const onSubmit = (data: LoginSchema) => {
        console.log(data);
        
        login(data)
    }

    return (
    <div className="w-2/4 border-2 border-gray-200 rounded-lg p-6 h-fit shadow-lg bg-white">
        <div className="text-3xl font-bold mb-4 text-center text-gray-800">
            Войти в аккаунт
        </div>

        <div className="">
            <Form {...AuthForm}>
                <form action="" onSubmit={AuthForm.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div className="">
                        <FormField
                            control={AuthForm.control}
                            name="email"
                            render={({ field }) => (
                                <div >
                                    <input type="text" placeholder="Email" {...field} className="w-full hover:border-gray-400 border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition duration-200" />
                                    {AuthForm.formState.errors.email && (
                                <span className="text-red-500 text-sm">{AuthForm.formState.errors.email.message}</span>
                            )}
                                </div>
                            )}
                        />
                    </div>
                    <FormField
                        control={AuthForm.control}
                        name="password"
                        render={({ field }) => (
                            <div >
                                <input type="password" placeholder="Password" {...field} className="w-full hover:border-gray-400 border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition duration-200" />
                                {AuthForm.formState.errors.password && (
                                    <span className="text-red-500 text-sm">{AuthForm.formState.errors.password.message}</span>
                                )}
                            </div>
                        )}
                    />
                    <button type="submit" className="bg-red-light text-white rounded-lg p-3 hover:bg-red-dark transition duration-200">Войти</button>
                </form>
            </Form>
        </div>

        <div className="text-sm text-gray-600 mt-4 text-center">
            Нет аккаунта? <Link to="/auth/register" className="text-red-light  hover:text-red-dark transition duration-200">Зарегистрируйтесь</Link>
        </div>

        <div className="flex items-center text-center gap-2 justify-center mt-4">
            <span className="flex-grow border-t border-gray-300"></span>
            <span className="px-2 text-gray-600">Или зайти с помощью</span>
            <span className="flex-grow border-t border-gray-300"></span>
        </div>
        <div className="flex gap-4 justify-center mt-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition duration-200"><Github size={24}/></button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition duration-200"><Facebook size={24}/></button>
        </div>
    </div>
  );
}