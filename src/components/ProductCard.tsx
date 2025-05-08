import type { Product } from '../features/products/useProductStore'
import { useProductStore } from '../features/products/useProductStore'
import { useNavigate } from 'react-router-dom'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const setSelectedProduct = useProductStore((s) => s.setSelectedProduct)
  const navigate = useNavigate()

  const handleClick = () => {
    setSelectedProduct(product)
    navigate(`/product/${product.id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded shadow p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition"
    >
      <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-4" />
      <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
      <p className="text-blue-600 font-bold mt-2">${product.price}</p>
    </div>
  )
}
