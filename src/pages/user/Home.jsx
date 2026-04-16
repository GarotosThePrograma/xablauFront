import './Home.css';
import { Button } from '../../components/ui/button'

import { Xablau } from '../../components/common/Xablau.jsx';

export function Home() {
    return (
        <>
            <div className='products-container'>
                <section>
                    <div className="products-field">
                        <div className='product'>
                            <div className="product-image">
                                <img src="" alt="Imagem do produto" />
                                <Button>teste botão</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}