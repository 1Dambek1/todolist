import { createFileRoute, redirect } from '@tanstack/react-router'
import { TasksList } from '../../components/TasksList/TasksList'
import { GetCurrentUser } from '@/api/auth'

export const Route = createFileRoute('/dashboard/today')({
  component: RouteComponent,
  beforeLoad: async () => {
    try {
      const user = await GetCurrentUser()
      console.log(user);
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error);
      return redirect({to: "/auth/login"})

    }
  }
})

function RouteComponent() {
  return (
    <div className="flex justify-center mt-12 h-screen w-full">
      <TasksList />
    </div>
  )
}
