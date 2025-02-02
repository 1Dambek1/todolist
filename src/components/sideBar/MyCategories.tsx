import { CategoryType } from "@/types/Category";
import { useRouter } from "@tanstack/react-router";
import { Hash, Link } from "lucide-react";

export function MyCategories({categories, isOpen, setIsOpen,darkMode}:{categories?:CategoryType[], isOpen:boolean, setIsOpen: (isOpen: boolean) => void,darkMode:boolean}) {
const router = useRouter();
    const currentPath = router.state.location.pathname;
    return (
    <nav>

        {categories?.map((item) => (
            <Link
                key={item.id}
                className={`
                    p-3 py-2  rounded-lg cursor-pointer
                    ${currentPath === `dashboard/${item.id}` 
                        ? !darkMode ? 'bg-blue-500 text-white ' : 'bg-purple-700 text-white ' 
                        : '  dark:text-white'}
                    ${!isOpen && 'lg:justify-center'}
                `}
                onClick={() => {
                    router.navigate({to:`dashboard/${item.id}` });
                    if (window.innerWidth < 1024) setIsOpen(false);
                }}
            >
                <div className={`flex items-center ${!isOpen && 'lg:justify-center'}`}>
                    <span className="mr-3"><Hash size={20} color={item.color} /></span> 
                    <span className={!isOpen ? 'lg:hidden' : ''}>{item.name}</span>
                </div>
            </Link>
        ))}

</nav>
  );
}