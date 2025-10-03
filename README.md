# 🛍️ Teslo Shop — E-commerce Frontend
[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)
[![es](https://img.shields.io/badge/lang-es-yellow.svg)](README.es.md)


Teslo Shop is a web-based e-commerce application built with React and Vite. It allows users to browse clothing, filter by size and price, and view products through a modern interface. It includes an admin panel to manage the catalog, but does not feature a shopping cart or payment gateway.

---

## 🚀 Technologies Used

- **React 19** — Main library for building interfaces  
- **Vite** — Ultra-fast bundler for development and production  
- **Tailwind CSS 4** — Utility-first and responsive styling  
- **ShadCN UI + Radix UI** — Accessible and customizable components  
- **Zustand** — Global state management  
- **React Router 7** — View navigation  
- **React Hook Form** — Form handling  
- **Axios** — REST API consumption  
- **TanStack Query** — Data fetching and caching  
- **Sonner** — Elegant notifications  
- **TypeScript** — Static typing for greater robustness

---

## 📦 Local Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/teslo-shop
cd teslo-shop
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
VITE_API_URL=http://localhost:3000/api
```

## Available scripts
```bash
npm run dev       # Starts the development server
npm run build     # Builds for production
npm run preview   # Previews the production build
npm run lint      # Runs ESLint
```

---

## Features

- ✅ Filter by size and price
- ✅ Product display
- ✅ Admin panel to create, edit, and delete products
- ✅ JWT authentication (consumed from the backend)

Note: It does not include a shopping cart or payment gateway.

---

### 🌐 Production preview

You can explore the live application here:

**🔗 [Teslo Shop — Preview](https://testlo-e-commerce.netlify.app/)** 

⚠️  **Important Note:** The backend is hosted for free on [Render](https://render.com/), which may cause a delay of up to **50 seconds** on the first response while the server wakes up. Please be patient when logging in or loading products.

---

### 🔐 Test User (Admin panel)

To access the admin panel and explore protected features, you can use the following credentials:

- **Email:** `test1@google.com`  
- **Password:** `Abc123`