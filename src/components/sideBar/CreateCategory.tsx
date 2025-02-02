import { createcategoryschema, CreateCategorySchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
const colorOptions = [
    { name: "Red", value: "#FF0000" },
    { name: "Blue", value: "#0000FF" },
    { name: "Green", value: "#00FF00" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Purple", value: "#800080" },
  ]
export function CreateCategory({isActive, isDarkMode, setIsActiveCategory}:{isActive:boolean, isDarkMode:boolean, setIsActiveCategory:(isActive:boolean)=>void}) {

  const form = useForm<CreateCategorySchema>({
    resolver: zodResolver(createcategoryschema),
  })
  console.log(form);
  
  
  return (
    <div className={`absolute w-screen h-screen backdrop-blur-sm dark:bg-gray-900 z-40 flex items-center justify-center ${!isActive && "hidden"} `}>

        <div className="w-3/6 h-1/2  relative">
            <button onClick={()=>setIsActiveCategory(false)} className="cursor-pointer absolute"><X size={30} color="gray" /></button>
            
            <form  className="light:bg-gray-200 dark:bg-gray-900 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                    <label htmlFor="name" className="block light:text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                        Project Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className={`shadow  border rounded w-full py-2 px-3 ${isDarkMode ?"bg-slate-800 text-white" :"text-black" }  focus:outline-none focus:shadow-outline`}
                        placeholder="Enter project name"
                        required
                    />
                    </div>
                    <div className="mb-6">
                    <label htmlFor="color" className="block light:text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                        Project Color
                    </label>
                    <select
                        id="color"
                        className={`shadow  border rounded w-full  py-2 ${isDarkMode ?"bg-slate-800 text-white" :"text-black" } px-3   focus:outline-none focus:shadow-outline`} 
                        required
                    >
                        <option value="">Select a color</option>
                        {colorOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.name} ({option.value})
                        </option>
                        ))}
                    </select>
                    </div>
                    <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className={`${ !isDarkMode?" bg-blue-500 hover:bg-blue-700" :"bg-purple-700 hover:bg-purple-900"} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                    >
                        Create Project
                    </button>
                    </div>
                </form>
        </div>
    </div>
  );
}