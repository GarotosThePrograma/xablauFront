import { CartProductCard } from "../../components/common/CartProductCard"
import { ProductCard } from "../../pages/user/Home"
import { Flex, Text } from "@chakra-ui/react"
import { useCartStore } from "../../store/useCartStore"

export function Cart() {
    
    const cart = useCartStore((state) => state.cart);

    return (
        
        <Flex w='100%'>
            <Flex direction='column' alignItems='center' maxWidth='75%'>
                {/* titulo */}
                <Flex
                    // estilo provisorio
                    justify='center'
                    alignItems='center'
                    w='100vw'
                    m='20px'
                    fontSize='30px'
                    fontWeight='bold'
                >Carrinho</Flex>

                {/* itens no carrinho */}
                <Flex direction='column'>
                    { cart.length === 0 ? ''  :  (
                        cart.map((product, id) => (
                            <CartProductCard  
                                key={id}
                                product={product}
                            />
                        ))
                    )}
                </Flex>

            </Flex>

            <Flex>
                {/* resumo pedido */}
                <Flex direction='column' alignItems='center' maxWidth='25%'>
                    <h2>Resumo do Pedido</h2>
                </Flex>
            </Flex>
        </Flex>
    )
}