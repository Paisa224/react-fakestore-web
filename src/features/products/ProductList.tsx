import { useEffect } from 'react'
import { useProductStore } from './useProductStore'
import ProductCard from '../../components/ProductCard'
import Loader from '../../components/Loader'
import ErrorMessage from '../../components/ErrorMessage'

export default function ProductList() {
  const { products, loading, error, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [])

  if (loading) return <Loader />
  if (error) return <ErrorMessage onRetry={fetchProducts} />

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
