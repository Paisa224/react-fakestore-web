import { AlertCircle } from 'lucide-react'

type Props = {
  message?: string
  onRetry?: () => void
}

export default function ErrorMessage({ message, onRetry }: Props) {
  return (
    <div className="flex flex-col items-center justify-center bg-red-50 text-red-700 border border-red-200 rounded-lg p-6 max-w-md mx-auto text-center space-y-4">
      <AlertCircle className="w-8 h-8" />
      <p className="text-base font-medium">
        {message ??
          'Estamos experimentando un problema. Por favor, intentá nuevamente más tarde.'}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Reintentar
        </button>
      )}
    </div>
  )
}
