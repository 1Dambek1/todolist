import { createFileRoute } from '@tanstack/react-router'
import { AuthForm } from '../../components/forms/AuthForm'

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex  justify-center items-center w-full mt-12   h-fit'><AuthForm/></div>
}
