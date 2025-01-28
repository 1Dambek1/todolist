import { PropsWithChildren, useEffect, useState } from "react";
import { Footer } from "./wrapper/Footer";
import { useLocation } from "@tanstack/react-router";
import { Sidebar } from "./sideBar/Sidebar";
import { Header } from "./wrapper/Header";

export function CheckPath():boolean {
    const {pathname} = useLocation()
    if(pathname.startsWith("/list") || pathname.startsWith("/profile")) {
        return false
    }
    return true
}

export function Layout({children}:PropsWithChildren) {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const status = CheckPath()

    return (
        status ? (
            
            <div className="flex flex-col w-full h-screen">
                <div className="fixed top-0 left-0 right-0 z-10">
                    <Header/>
                </div>
                
                <div className="flex-grow flex-shrink-0 mt-16 transition-all duration-300">
                    {children}
                </div>

                <div className="">
                    <Footer/>
                </div>
            </div>
        ) : 
        (
            <div className="flex h-screen bg-current-bg transition-all duration-300">
                <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div className="flex-grow m-auto lg:mt-0 mt-12">
                    {children}
                </div>
            </div>
        )
    );
}