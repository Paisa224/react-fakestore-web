import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './features/auth/Login'
import ProductList from './features/products/ProductList'
import ProductDetails from './features/products/ProductDetails'
import ProtectedRoute from './pages/ProtectedRoute'
import Layout from './components/Layout'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
