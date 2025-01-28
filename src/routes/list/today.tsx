import { createFileRoute } from '@tanstack/react-router'
import { TasksList } from '../../components/TasksList/TasksList'

export const Route = createFileRoute('/list/today')({
  component: RouteComponent,
})

function RouteComponent() {
  return (  
  <div className='flex justify-center mt-12 h-screen w-full'>
    <TasksList/>
  </div>
  )
}
