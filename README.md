# 🛍️ FakeStore App (React + Zustand + Vite)

Aplicación de consumo de productos desde la API de [FakeStore](https://fakestoreapi.com), que permite autenticación de usuario, navegación protegida y visualización de productos con sus detalles.

---

## 🚀 Tecnologías usadas

- ⚛️ **React 19** + **TypeScript**
- ⚡ **Vite**
- 📦 **Zustand** (manejo de estado)
- 🎯 **React Hook Form** + **Zod** (validación de formularios)
- 🧭 **React Router DOM**
- 💨 **Tailwind CSS**
- 🔐 Persistencia con `localStorage`
- 🌐 API externa: [fakestoreapi.com](https://fakestoreapi.com)

---

## 📱 Funcionalidades

### ✅ Login
- Autenticación con nombre de usuario y contraseña
- Llamada a `POST /auth/login`
- Manejo de errores y validación de campos

### 🛒 Listado de productos
- Carga de productos desde `GET /products`
- Manejo de estados de carga y error
- Vista en grilla responsiva

### 🔍 Detalle de producto
- Navegación a `/product/:id`
- Carga por ID directo desde `GET /products/:id`
- Renderizado protegido contra acceso sin datos

### 🔐 Rutas protegidas
- Acceso bloqueado si no hay token válido
- Redirección automática a `/login`

---

## 📂 Estructura de carpetas

```bash
src/
├── api/         # Llamadas a la API externa
├── components/  # Componentes reutilizables
├── features/
│   ├── auth/     # Login y auth store
│   └── products/ # Product list, details y store
├── pages/       # Rutas protegidas
├── App.tsx      # Routing principal
└── main.tsx     # Entry point



---

## ⚙️ Configuración de entorno

El proyecto usa variables de entorno definidas en `.env`:

### 🧪 `.env.example`

```env
VITE_API_URL=https://fakestoreapi.com

git clone https://github.com/Paisa224/react-fakestore-web.git
cd react-fakestore-web

# Instalación
npm install

# Crea tu archivo .env basado en .env.example
cp .env.example .env

# Correr la app
npm run dev

👤 Autor
Manuel Salinas
🔗 GitHub: https://github.com/Paisa224
💼 Desarrollador Web Fullstack
