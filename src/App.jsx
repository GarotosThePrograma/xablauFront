import './App.css';

// permite o react ler varias paginas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home.jsx';
import { Login } from './pages/RegisterLogin/Login.jsx';
import { Register } from './pages/RegisterLogin/Register.jsx';

import { NavBar } from './components/layout/NavBar.jsx';

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element= { <Home /> } />
        <Route path='/login' element= { <Login /> } />
        <Route path='/cadastro' element= { <Register /> } />
      </Routes>

    </BrowserRouter>
  )
}

export default App
