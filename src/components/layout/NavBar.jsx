import './searchBar.css';

import { Xablau } from './Xablau.jsx'

import { useState } from 'react';

import { Import, User, UserCircle } from 'lucide-react';
import { MdShoppingCart, MdFavorite, MdMenu, MdClose } from 'react-icons/md';

export function NavBar () {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <div style={{ borderBottom: '1px solid #5bb1f6' }}>
            <nav style={{ width: '100%', background: '#004d8e' }}>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' , height: '124px'}}>
                    <h1 style={{ color: 'white', width: 'fit-content', height: '60px'}}><Xablau/></h1>

                    <div className='desktop-menu' style={{ display: 'flex', alignItems: 'center', gap: '20px'}}>
                        <div className='seachField'>
                            <input placeholder="Busque na Xablau!" type="text" name="text" className="input" />
                        </div>

                        <div className='login-register'>
                            <a href="#" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', color: 'white' }}>
                                <UserCircle size={42} strokeWidth={1.5} style={{ color: 'white' }} />
                                <div>Entre <br />
                                ou Cadastre-se</div>
                            </a>
                        </div>

                        <div className='buttonsField'>
                            <a href="#" style={{ display: 'flex', gap: '25px' }}>
                                <MdFavorite size={30} style={{ color: 'white' }} />
                                <MdShoppingCart size={35} style={{ color: 'white' }} />
                            </a>
                        </div>
                    </div>

                    <button className='hamburguer-btn' onClick={() => setMenuOpen(!menuOpen)}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'white'}}>
                            {menuOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
                    </button>
                </div>

                {menuOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px 20px', borderTop: '1px solid #5bb1f6' }}>
                        <div className='searchField'>
                            <input placeholder='Busque na Xablau!' type='text' name='text' className='input' />
                        </div>

                        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white'}}>
                            <UserCircle size={36} strokeWidth={1.5} style={{ color: 'white' }} />
                            <div>Entre ou Cadastre-se</div>
                        </a>
                    </div>
                )}
            </nav>
        </div>
    )
}