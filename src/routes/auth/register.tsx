import { createFileRoute } from '@tanstack/react-router'
import { RegisterForm } from '../../components/forms/RegisterForm'

export const Route = createFileRoute('/auth/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex justify-center  h-fit mt-12'><RegisterForm/></div>
}
