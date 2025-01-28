import { Link } from "@tanstack/react-router";
import { Facebook, Github } from "lucide-react";

export function RegisterForm() {
  return (
    <div className="w-2/4 border-2 border-gray-200 rounded-lg p-6 h-fit shadow-lg bg-white">
        <div className="text-3xl font-bold mb-4 text-center text-gray-800">
            Создать аккаунт
        </div>

        <div className="">
            <form action="" method="post" className="flex flex-col gap-4">
                <input type="text" placeholder="Email" className="hover:border-gray-400 border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition duration-200" />
                <input type="text" placeholder="username" className="hover:border-gray-400 border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition duration-200" />
                <input type="password" placeholder="Password" className="hover:border-gray-400 border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition duration-200" />
                
                <button type="submit" className="bg-red-light text-white rounded-lg p-3 hover:bg-red-dark transition duration-200">Войти</button>
            </form>
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