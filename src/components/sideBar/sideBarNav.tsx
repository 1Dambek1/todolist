import { useRouter } from "@tanstack/react-router";
import { SidebarItem } from "../../types/sideBarType";

export function SideBarNav({sidebarItems, isOpen, setIsOpen}:{sidebarItems:SidebarItem[], isOpen:boolean, setIsOpen: (isOpen: boolean) => void}) {
    const router = useRouter();
    const currentPath = router.state.location.pathname;
    return (
    <nav>

        {sidebarItems.map((item) => (
            <div
                key={item.path}
                className={`
                    p-3 py-2  rounded-lg cursor-pointer
                    ${currentPath === item.path 
                        ? 'bg-blue-500 text-white' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white'}
                    ${!isOpen && 'lg:justify-center'}
                `}
                onClick={() => {
                    router.navigate({to:item?.path});
                    if (window.innerWidth < 1024) setIsOpen(false);
                }}
            >
                <div className={`flex items-center ${!isOpen && 'lg:justify-center'}`}>
                    <span className="mr-3">{item.icon}</span>
                    <span className={!isOpen ? 'lg:hidden' : ''}>{item.title}</span>
                </div>
            </div>
        ))}
</nav>
  );
}