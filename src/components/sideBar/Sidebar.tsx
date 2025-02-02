import { useState } from "react";
import {  Menu, X, Moon, Sun, Plus } from "lucide-react";
import { sidebarConstItems } from "../../constants/sideBarItems";
import { SideBarNav } from "./sideBarNav";
import { SidebarProps } from "../../types/sideBarType";
import { useGetCategories } from "@/hooks/useGetCategories";
import { MyCategories } from "./MyCategories";
import { CreateCategory } from "./CreateCategory";

// Добавим типы пропсв


export function Sidebar({ darkMode, toggleDarkMode }: SidebarProps) {
    const [isHover, setIsHover] = useState(false);

    const [isActiveCategory, setIsActiveCategory] = useState(false);

    const [isOpen, setIsOpen] = useState(true);



    const {data:CategoryData} = useGetCategories()
    
    
    return (
        <>
            <CreateCategory isActive={isActiveCategory} isDarkMode={darkMode} setIsActiveCategory={setIsActiveCategory} />
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-4 left-[23px] z-30"
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
                ${
                    darkMode ? "bg-gray-900 " : "bg-white"
                }

                shadow-lg
                    z-10
                transition-left duration-300
                ${isOpen ? 'w-64 left-0' : 'w-0 -left-64 lg:w-20'}
                overflow-hidden
            `}>
                <div className="p-4 min-w-64 lg:min-w-0">
                    <SideBarNav sidebarItems={sidebarConstItems} isOpen={isOpen} setIsOpen={setIsOpen} darkMode={darkMode}/>

                    <div 
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className={` 
                        mt-6 
                        ${!isOpen && 'w-full h-[1.5px] bg-gray-200 dark:bg-gray-700 mb-3'}
                         text-gray-400
                          dark:text-white
                          h-full
                          cursor-pointer
                          transition-all duration-300
                          flex 
                          justify-between
                          `}>
                            <button 
                    onClick={()=>setIsActiveCategory(!isActiveCategory)}
                            
                            >{isOpen ? `Мои проекты ${CategoryData?.length}/10` : ''} </button>
                            <button className={`sm:block  ${isHover ? "block" : "lg:hidden"}`}> <Plus size={20} color="gray" /></button>
                    </div>
                    <MyCategories categories={CategoryData} isOpen={isOpen} setIsOpen={setIsOpen} darkMode={darkMode}/>

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
