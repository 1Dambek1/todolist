import {  Settings, Search, Calendar, Calendar1, CalendarCheck2 } from "lucide-react";
import { SidebarItem } from "../types/sideBarType";

export const sidebarConstItems: SidebarItem[] = [
    
    {
        title: "Поиск",
        icon: <Search size={20} />,
        onClick: () => {
            console.log("Поиск");
        }
    },
    {
        title: "Сегодня",
        path: "/dashboard/today",
        icon: <Calendar1 size={20} />
    },
    {
        title: "Предстоящие",
        path: "/dashboard/future",
        icon: <Calendar size={20} />
    },
    {
        title: "Выполнено",
        path: "/dashboard/completed",
        icon: <CalendarCheck2 size={20} />
    },
    {
        title: "Настройки",
        path: "/dashboard/settings",
        icon: <Settings size={20} />
    },
];
