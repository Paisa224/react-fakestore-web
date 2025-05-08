import { create } from 'zustand'
import { getProducts, getProductById } from '../../api/fakestore'

export type Product = {
  id: number
  title: string
  price: number
  image: string
  description: string
}

type ProductState = {
  products: Product[]
  loading: boolean
  error: string | null
  selectedProduct: Product | null
  fetchProducts: () => Promise<void>
  fetchProductById: (id: number) => Promise<void> 
  setSelectedProduct: (product: Product) => void
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  error: null,
  selectedProduct: null,

  fetchProducts: async () => {
    set({ loading: true, error: null })
    try {
      const data = await getProducts()
      set({ products: data, loading: false })
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },

  fetchProductById: async (id) => {
    set({ loading: true, error: null })
    try {
      const data = await getProductById(id)
      set({ selectedProduct: data, loading: false })
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },

  setSelectedProduct: (product) => set({ selectedProduct: product }),
}))
