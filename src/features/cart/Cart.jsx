import { CartProductCard } from "../../components/common/CartProductCard"
import { ProductCard } from "../../pages/user/Home"
import { Flex, Text } from "@chakra-ui/react"

export function Cart() {
    // produto apenas para moldar o cartproductcard
    const product = {
    id: 1,
    name: 'Placa de Vídeo Challenger ASRock AMD Radeon RX 7600 8GB',
    price: '1.996,65',
    stock: 0,
    img: 'https://images4.kabum.com.br/produtos/fotos/907814/placa-de-video-asrock-amd-radeon-rx-7600-challenger-pro-oc-8gb-gddr6-triple-fan-90-ga62zz-00uanf_1761582764_gg.jpg',
  }

    return (
        <Flex w='100%'>
            <Flex direction='column' alignItems='center' maxWidth='65%'>
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
                <Flex>
                    <CartProductCard product={product} />
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