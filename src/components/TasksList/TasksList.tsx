import { tasks } from "../../constants/tasks";
import { Task } from "../Task/Task";

export function TasksList() {
  return (
    <div className="h-screen w-3/4   ">
      <div >
          <h1 className="text-2xl font-bold text-left text-text-color ">Сегодня</h1>
          <div className="ml-4 mt-6 flex flex-col gap-2">
                {tasks.map((task) => (
                    <Task key={task.id} {...task} />
                ))}

          </div>
      </div>
    </div>
  );
}