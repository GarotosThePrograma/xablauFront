import './NavBar.css';

import { useState, useEffect } from 'react';

import { Xablau } from '../ui/Xablau.jsx'
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
    <div style={{ borderBottom: '1px solid white' }}>
      <nav style={{ width: '100%', background: 'linear-gradient(to bottom, #004d8e, #3695e3)' }}>

        {/* barra principal */}
        <div style={{ height: '124px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
          
          <h1 style={{ color: 'white', margin: 0 }}><Xablau/></h1>

          {/* itens do desktop, some abaixo de 600px */}
          <div className='desktop-items' style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className='seachField'>
              <input placeholder="Busque na Xablau!" type="text" className="input" />
            </div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white' }}>
              <UserCircle size={42} strokeWidth={1.5} />
              <div>Entre<br/>ou Cadastre-se</div>
            </a>
            <a href="#" style={{ display: 'flex', gap: '15px' }}>
              <MdFavorite size={30} style={{ color: 'white' }} />
              <MdShoppingCart size={35} style={{ color: 'white' }} />
            </a>
          </div>

          {/* botao hamburguer, aparece abaixo de 600px */}
          <button className='hamburger-btn' onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'white' }}>
            {menuOpen ? <MdClose size={32} /> : <MdMenu size={32} />} {/* op ternaria, se é true, mdclose, se é false, mdmenu */}
          </button>

        </div>

        {/* menu mobile (muda pra column), se menuOpen = true, renderiza o menu mobile  */}
        {menuOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px 24px', borderTop: '1px solid #5bb1f6' }}>
            <div className='seachField'>
                <input placeholder="Busque na Xablau!" type="text" className="input" />
            </div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white' }}>
                <UserCircle size={36} strokeWidth={1.5} />
                <div>Entre ou Cadastre-se</div>
            </a>
            <a href="#" style={{ display: 'flex', gap: '25px' }}>
                <MdFavorite size={30} style={{ color: 'white' }} />
                <MdShoppingCart size={35} style={{ color: 'white' }} />
            </a>
            </div>
        )}

      </nav>
    </div>
  )
}