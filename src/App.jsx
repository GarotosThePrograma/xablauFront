import './App.css';

// permite o react ler varias paginas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/user/Home.jsx';
import { Login } from './features/auth/Login.jsx';
import { Register } from './features/auth/Register.jsx';
// Lembre-se de importar o ProductDetails, Dashboard e Inventory também! (perguntar oq é pra IA)
import { UserLayout } from './layouts/UserLayout';
import { AdminLayout } from './layouts/AdminLayout';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* USER */}
        <Route element= { <UserLayout /> }>
          <Route path='/' element= { <Home /> } />
          <Route path='/product/:id' /* element= { <ProductDetails/>  }*/ />
          <Route path='/login' element= { <Login /> } />
          <Route path='/register' element= { <Register /> } />
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

export default App
