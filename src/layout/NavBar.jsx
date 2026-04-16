import './NavBar.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Xablau } from '../components/common/Xablau.jsx'
import { UserCircle } from 'lucide-react';
import { MdShoppingCart, MdFavorite, MdMenu, MdClose } from 'react-icons/md';

export function NavBar () {
  const [menuOpen, setMenuOpen] = useState(false);

  // garante que a aba do hamburguer fecha quando a janela fica maior que 600px e remove itens do nav quando o hamburguer aparece
  useEffect(() => {
    const resizeTab = () => {
        if (window.innerWidth >= 600) { setMenuOpen(false);
        document.querySelector('nav').classList.remove('is-mobile');
        } else {
            document.querySelector('nav').classList.add('is-mobile')
        }
    }   
    resizeTab(); // roda na inicializacao
    window.addEventListener('resize', resizeTab);
    return () => window.removeEventListener('resize', resizeTab);
  }, []); // [] = vazio roda só uma vez, [valor] = roda toda vez que o valor muda

  return (
    <div>
      <nav className='nav-container'>

        {/* barra principal */}
        <div  className='nav-flex-container'>
          
          <h1 className='logo'><Xablau/></h1>

          <div className='search-container'>
              <input placeholder="Busque na Xablau!" type="text" className="search-input" />
            </div>

          {/* itens do desktop, some abaixo de 600px */}
          <div className='desktop-items'>
            <Link to="/login" className='desktop-login'>
              <UserCircle size={42} strokeWidth={1.5} />
              <div>Entre<br/>ou Cadastre-se</div>
            </Link>
            <a href="#" className='desktop-fav-cart'>
              <MdFavorite size={30} className='favorite-icon' />
              <MdShoppingCart size={35} className='cart-icon' />
            </a>
          </div>

          {/* botao hamburguer, aparece abaixo de 600px */}
          <button className='hamburger-btn' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <MdClose size={32} /> : <MdMenu size={32} />} {/* op ternaria, se é true, mdclose, se é false, mdmenu */}
          </button>

        </div>

        {/* template string do js, ${} = expressao js avaliada na hora, ternaria para abertura do menu */}
        <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
          <Link to="/login" className='mobile-login' onClick={() => setMenuOpen(false)}>
            <UserCircle size={36} strokeWidth={1.5} />
            <div>Entre ou Cadastre-se</div>
          </Link>
          <a href="#" className='mobile-fav-cart'>
            <MdFavorite size={30} className='favorite-icon' />
            <MdShoppingCart size={35} className='cart-icon' />
          </a>
        </div>

      </nav>
    </div>
  )
}