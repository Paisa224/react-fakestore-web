import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useAuthStore } from './useAuthStore'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../../api/fakestore'
import ErrorMessage from '../../components/ErrorMessage'

const schema = z.object({
  username: z.string().min(1, 'Usuario requerido'),
  password: z.string().min(1, 'Contraseña requerida'),
})

type FormData = z.infer<typeof schema>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const setToken = useAuthStore((state) => state.setToken)
  const navigate = useNavigate()
  const [formError, setFormError] = useState('')

  const onSubmit = async (data: FormData) => {
    setFormError('')
    try {
      const { token } = await login(data.username, data.password)
      setToken(token)
      navigate('/')
    } catch (err) {
      const raw = (err as Error).message
      const friendlyMessage = raw.includes('Failed to fetch')
        ? 'Estamos teniendo problemas para conectarnos. Por favor, intentá nuevamente en unos minutos.'
        : raw

      setFormError(friendlyMessage)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="flex items-center justify-center px-8 py-16 bg-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-5"
        >
          <h1 className="text-3xl font-bold text-gray-800">Iniciar sesión</h1>
          <p className="text-sm text-gray-500">
            Introduce tu correo electrónico y contraseña para iniciar sesión
          </p>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Su correo electrónico
            </label>
            <input
              {...register('username')}
              className="w-full border border-gray-300 rounded-md px-4 py-2 h-11 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="nombre@email.com"
            />
            {errors.username && (
              <p className="text-sm text-red-600 mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              {...register('password')}
              className="w-full border border-gray-300 rounded-md px-4 py-2 h-11 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="********"
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {formError && <ErrorMessage message={formError} />}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white font-semibold py-2.5 rounded-md hover:opacity-90 transition"
          >
            {isSubmitting ? 'Ingresando...' : 'INICIAR SESIÓN'}
          </button>

          <p className="text-center text-sm text-gray-500">
            ¿No estás registrado?{' '}
            <a href="#" className="text-black font-medium">
              Crea una cuenta
            </a>
          </p>
        </form>
      </div>

      <div className="hidden md:block">
        <img
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="Login image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
