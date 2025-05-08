const BASE_URL = 'https://fakestoreapi.com'

export const login = async (username: string, password: string) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })

  if (!res.ok) throw new Error('Credenciales inválidas')
  return res.json()
}

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`)
  if (!res.ok) throw new Error('Error al cargar productos')
  return res.json()
}

export const getProductById = async (id: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error('No se pudo cargar el producto');
  return res.json();
};
