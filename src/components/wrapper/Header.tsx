import { Link } from "@tanstack/react-router";
import { RedButton } from "../ui/RedButton";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
// ""
  return (
    
    <div className="bg-white pt-4 flex justify-center">
         
      <div className="w-[1140px] flex justify-between px-4 md:px-0">
        <Link to="/">
          <div className="flex gap-2 items-center">
            <img className="max-w-[40px] max-h-[40px]" src="/logo.png" alt="logo" />
            <span className="text-2xl font-bold text-red">todolist</span>
          </div>
        </Link>

        {/* Бургер кнопка */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Навигационное меню */}
        <div className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          md:flex 
          fixed md:static 
          top-[72px] left-0 
          w-full md:w-auto 
          bg-white 
          md:bg-transparent
          border-t md:border-t-0
          shadow-lg md:shadow-none
        `}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm items-center w-full md:w-auto p-4 md:p-0">

           <li className="hover:text-gray-300 w-full md:w-auto">
              <ScrollLink to="features" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              <Link to="/">Возможности</Link>
              </ScrollLink>
            </li>
            <li className="hover:text-gray-300 w-full md:w-auto">
              <ScrollLink to="how-it-works" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
              <Link to="/">Как работает</Link>
            </ScrollLink>
            </li>
            <li className="hover:text-gray-300 w-full md:w-auto">
              <ScrollLink to="testimonials" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">
                  <Link to="/">Отзывы</Link>
              </ScrollLink>
            </li>
            
            <li className="text-gray-300 hidden md:block">|</li>
            <li className="hover:text-gray-300 w-full md:w-auto"><Link to="/auth/login">Войти</Link></li>
            <li className="w-full md:w-auto">
            <Link to="/auth/register">
                <RedButton text="Начать бесплатно"/>
            </Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}