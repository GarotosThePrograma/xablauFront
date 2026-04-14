import './App.css';

// permite o react ler varias paginas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';

import { NavBar } from './components/layout/NavBar.jsx';

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element= { <Home /> } />
        <Route path='/login' element= { <Login /> } />
      </Routes>

    </BrowserRouter>
  )
}

export default App
