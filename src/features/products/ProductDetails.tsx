import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProductStore } from './useProductStore'
import { ArrowLeft } from 'lucide-react'

export default function ProductDetails() {
  const product = useProductStore((s) => s.selectedProduct)
  const navigate = useNavigate()

  useEffect(() => {
    if (!product) navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [product, navigate])

  if (!product) return null

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10 transition-all">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:underline mb-6 font-medium"
        >
          <ArrowLeft size={18} /> Volver a productos
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow"
            />
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>
            <div className="text-xl font-bold text-blue-600">
              ${product.price}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
