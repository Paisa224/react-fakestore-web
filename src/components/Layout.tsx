import { Outlet, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../features/auth/useAuthStore'
import type { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  const navigate = useNavigate()
  const clear = useAuthStore((s) => s.setToken)

  const handleLogout = () => {
    clear(null)
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">FakeStore</h1>
        <button
          onClick={handleLogout}
          className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-100"
        >
          Cerrar sesión
        </button>
      </header>

      <main className="flex-1 bg-gray-100 p-6">
        {children || <Outlet />}
      </main>
    </div>
  )
}
