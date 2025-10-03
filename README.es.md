# 🛍️ Teslo Shop — E-commerce Frontend
[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)
[![es](https://img.shields.io/badge/lang-es-yellow.svg)](README.es.md)

Teslo Shop es una aplicación web de e-commerce desarrollada con React y Vite. Permite explorar ropa, filtrar por tallas y precios, y visualizar productos con una interfaz moderna. Incluye un panel administrativo para gestionar el catálogo, pero no cuenta con carrito de compras ni pasarela de pagos.


---

## 🚀 Tecnologías utilizadas

- **React 19** — Librería principal para construir interfaces
- **Vite** — Bundler ultrarrápido para desarrollo y producción
- **Tailwind CSS 4** — Estilado utilitario y responsivo
- **ShadCN UI + Radix UI** — Componentes accesibles y personalizables
- **Zustand** — Manejo de estado global
- **React Router 7** — Navegación entre vistas
- **React Hook Form** — Manejo de formularios
- **Axios** — Consumo de APIs REST
- **TanStack Query** — Fetching y caching de datos
- **Sonner** — Notificaciones elegantes
- **TypeScript** — Tipado estático para mayor robustez

---

## 📦 Instalación local

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/teslo-shop
cd teslo-shop
```

### 2. Clona el repositorio
```bash
npm install
```

### 3. Configura las variables de entorno
```bash
VITE_API_URL=http://localhost:3000/api
```

## Scripts disponibles

```bash
npm run dev       # Inicia el servidor de desarrollo
npm run build     # Compila para producción
npm run preview   # Previsualiza el build
npm run lint      # Ejecuta ESLint
```

---

## Funcionalidades
- ✅ Filtrado por tallas y precios
- ✅ Visualización de productos
- ✅ Panel administrativo para crear, editar y eliminar productos
- ✅ Autenticación con JWT (consumida desde el backend)

No cuenta con carrito de compras ni pasarela de pagos.

---

### 🌐 Vista previa en producción

Puedes explorar la aplicación en línea aquí:

**🔗 [Teslo Shop — Preview](https://testlo-e-commerce.netlify.app/)** 

⚠️ **Nota importante:** El backend está desplegado gratuitamente en [Render](https://render.com/), lo que puede provocar una demora de hasta **50 segundos** en la primera respuesta mientras el servidor se activa. Ten paciencia al iniciar sesión o al cargar productos.

---

### 🔐 Usuario de prueba (Panel administrativo)

Para acceder al panel administrativo y explorar funcionalidades protegidas, puedes usar las siguientes credenciales:

- **Correo:** `test1@google.com`  
- **Contraseña:** `Abc123`