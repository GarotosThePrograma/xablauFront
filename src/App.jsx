import './App.css';


import { Home } from './pages/user/Home.jsx';
import { Login } from './features/auth/Login.jsx';
import { Register } from './features/auth/Register.jsx';
// Lembre-se de importar o ProductDetails, Dashboard e Inventory também! (perguntar oq é pra IA)
import { AppRoutes } from './routes';

function App() {
  return (
      <AppRoutes />
  )
}

export default App
