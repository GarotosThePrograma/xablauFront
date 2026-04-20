// permite o react ler varias paginas
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UserLayout } from '../layouts/UserLayout'
import { AdminLayout } from '../layouts/AdminLayout'
import { Home } from '@/pages/user/Home'
import { Login } from '@/features/auth/Login'
import { Register } from '@/features/auth/Register'
import { Cart } from '../features/cart/Cart'


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            {/* USER */}
            <Route element= { <UserLayout /> }>
                <Route path='/' element= { <Home /> } />
                <Route path='/product/:id' /* element= { <ProductDetails/>  }*/ />
                <Route path='/login' element= { <Login /> } />
                <Route path='/register' element= { <Register /> } />
                <Route path='/cart' element= { <Cart /> } />
            </Route>
            
            {/*
            ADMIN
            <Route element= { <AdminLayout /> }> 
                <Route index element= { <Dashboard /> } />
                <Route path='products' element= { <Inventory /> } /> 
            </Route> 
            */}
            </Routes> 

        </BrowserRouter>
    )
}