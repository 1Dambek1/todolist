import { useState } from "react";
import {  Menu, X, Moon, Sun } from "lucide-react";
import { sidebarConstItems } from "../../constants/sideBarItems";
import { SideBarNav } from "./sideBarNav";
import { SidebarProps } from "../../types/sideBarType";

// Добавим типы пропсв


export function Sidebar({ darkMode, toggleDarkMode }: SidebarProps) {

    const [isOpen, setIsOpen] = useState(true);
    
    
    return (
        <>
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-4 left-[23px] z-50"
            >
                {isOpen ? <X size={24} color={`${darkMode ? "white" : "black"}`} /> : <Menu size={24} color={`${darkMode ? "white" : "black"}`} />}
            </button>


            {isOpen && (
                <div 
                    className="fixed inset-0 dark:bg-gray-900 z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className={`
                pt-10
                opacity-100
                fixed lg:static
                h-full
                dark:bg-gray-900 
                bg-sidebar-bg
                shadow-lg
                    z-40
                transition-left duration-300
                ${isOpen ? 'w-64 left-0' : 'w-0 -left-64 lg:w-20'}
                overflow-hidden
            `}>
                <div className="p-4 min-w-64 lg:min-w-0">
                    <SideBarNav sidebarItems={sidebarConstItems} isOpen={isOpen} setIsOpen={setIsOpen} darkMode={darkMode}/>

                    <div className={` 
                        mt-6 
                        ${!isOpen && 'w-full h-[1.5px] bg-gray-200 dark:bg-gray-700 mb-3'}
                         text-gray-400
                          dark:text-white
                          `}>
                            {isOpen ? 'Мои проекты' : ''}
                    </div>

                    <button
                        onClick={toggleDarkMode}
                        className="absolute bottom-1 p-3 py-2 mt-4 w-full rounded-lg cursor-pointer  dark:text-white flex items-center"
                    >
                        <span className="mr-3">
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </span>
                        <span className={!isOpen ? 'lg:hidden' : ''}>
                            {darkMode ? 'Светлая тема' : 'Тёмная тема'}
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}
