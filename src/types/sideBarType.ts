export type SidebarItem = {
    title: string;
    path?: string;
    icon: React.ReactNode;
    onClick?: () => void;
}
export type SidebarProps = {
    darkMode: boolean;
    toggleDarkMode: () => void;
}