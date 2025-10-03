import { createHashRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./pages/home/HomePage";
import { ProductPage } from "./pages/product/ProductPage";
import { GenderPage } from "./pages/gender/GenderPage";
// import { AuthLayout } from "./auth/layouts/AuthLayout";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
// import { AdminLayout } from './admin/layouts/AdminLayout';
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { lazy } from "react";
import { AdminRoute, NotAuthtenticatedRoute } from "./components/routes/ProtectedRoutes";

const AuthLayout =  lazy(() => import('./auth/layouts/AuthLayout'));
const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'));


export const appRouter = createHashRouter([
// export const appRouter = createBrowserRouter([

    //Shop routes
    {
        path: '/',
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'product/:idSlug',
                element: <ProductPage/>,
            },
            {
                path: 'gender/:gender',
                element: <GenderPage/>,
            },
        ],
    },

    //auth routes
    {
        path: '/auth',
        element: (
            <NotAuthtenticatedRoute>
                <AuthLayout/>
            </NotAuthtenticatedRoute>
        ),
        children: [
            {
                index: true,
                element: <Navigate to={'/auth/login'}/>
            },
            {
                path: 'login',
                element: <LoginPage/>,
            },
            {
                path: 'register',
                element: <RegisterPage/>,
            },
        ]
    },

    //admin routes
    {
        path: '/admin',
        element: (
            <AdminRoute>
                <AdminLayout/>
            </AdminRoute>
        ),
        children: [
            {
                index: true,
                element: <DashboardPage/>,
            },
            {
                path: 'products',
                element: <AdminProductsPage/>,
            },
            {
                path: 'products/:id',
                element: <AdminProductPage/>
            }
        ]
    },

    {
        path: '*',
        element: <Navigate to={'/'}/>
    }
])
