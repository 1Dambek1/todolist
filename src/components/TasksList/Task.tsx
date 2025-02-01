import { Calendar, Circle,  CircleCheck,  Edit, Move, Trash2 } from "lucide-react";
import { useState } from "react";
import { TaskType } from "../../types/TaskType";

export function Task({name,status, category}:TaskType) {
    const [isHover, setIsHover] = useState(false);
    const [isCompleted, setIsCompleted] = useState(status);

    const handleCompleted = () => {
        setIsCompleted(!isCompleted);
    }
    
  return (
    <div className="">
        <button 
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={()=>{
            console.log("clicked1")
            }} 
        className={`
        flex 
        w-full justify-between items-center  
        rounded-md 
        p-2
        
        `}>
          <div className="flex gap-2">
            <div className={`${isHover ? 'opacity-100' : 'opacity-0'}`}>
                <button>
                    <Move size={15} color="gray" />
                </button>
            </div>
            <button 
            onClick={(e)=>{
                e.stopPropagation();
                handleCompleted()}} 
            >
                {isCompleted ? <CircleCheck size={20} color="gray" /> : <Circle size={20} color="gray" />}

            </button>
            <div className={` transition-all duration-200 ${isCompleted ? 'text-gray-600 line-through' : ''}`}>{name}</div>
          </div>
          <div className="">

            <div className={`flex gap-2 transition-all duration-200 ${isHover ? 'opacity-100' : 'opacity-0'}`}>
                <button>
                    <Edit size={15} color="gray" />
                </button>
                <button>
                    <Calendar size={15} color="gray" />
                </button>
                <button>
                    <Trash2 size={15} color="gray" />
                </button>
            </div>
              <div className="text-gray-400 text-[12px]">
                #{category}
              </div>
          </div>
        </button>
        <div className="h-[1px] w-full opacity-50 dark:bg-purple-700 bg-blue-500 "></div>
    </div>
  );
}