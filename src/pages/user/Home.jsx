import './Home.css';
import { Box, Flex, Input, Text, IconButton, Image, Skeleton } from '@chakra-ui/react';
import { FlexProduct } from '@/components/common/FlexProduct';

import { Xablau } from '../../components/common/Xablau.jsx';

export function Home() {
    return (
        <>
            <Flex direction="column">
                <Flex direction="row" >
                    <Flex direction='column' h='450px' align='flex-start' justify='center'> {/* os itens mais vendidos */}
                        <Text m='30px'>
                            Mais Vendidos
                        </Text>
                        <Flex direction='row' gap='25px'>
                            <FlexProduct>
                                <Image
                                src='https://images5.kabum.com.br/produtos/fotos/sync_mirakl/573345/xlarge/Placa-de-V-deo-Challenger-ASRock-AMD-Radeon-RX-7600-8GB-GDDR6-128-Bits-90-GA41ZZ-00UANF_1773864921.jpg'
                                boxSize='200px'
                                objectFit='cover'
                                borderRadius='20px'
                                boxShadow='1px 1px 2px lightgray'
                                />
                                <Text m='10px'>Placa de Vídeo Challenger ASRock AMD Radeon RX 7600 8GB</Text>
                                <Text>R$ 1.996,65</Text>
                            </FlexProduct>
                            <Flex
                                h='320px'
                                w='300px'
                                objectFit='cover'
                                borderRadius='20px'
                                boxShadow='1px 1px 2px lightgray'
                                justify='center'
                                align='center'
                                direction='column'
                            >
                                <Image
                                src='https://images1.kabum.com.br/produtos/fotos/692461/placa-de-video-husky-alpha-rx-580-amd-8gb-gddr5-256-bit-hdmi-dvi-displayport-hvg580_1773838121_gg.jpg'
                                boxSize='200px'
                                objectFit='cover'
                                borderRadius='20px'
                                boxShadow='1px 1px 2px lightgray'
                                />
                                <Text m='10px'>Placa De Vídeo Husky Alpha RX 580 AMD 8GB</Text>
                                <Text>R$ 899,99</Text>

                            </Flex>
                            <Flex
                                h='320px'
                                w='300px'
                                objectFit='cover'
                                borderRadius='20px'
                                boxShadow='1px 1px 2px lightgray'
                                justify='center'
                                align='center'
                                direction='column'
                            >
                                <Image
                                src='https://images1.kabum.com.br/produtos/fotos/692461/placa-de-video-husky-alpha-rx-580-amd-8gb-gddr5-256-bit-hdmi-dvi-displayport-hvg580_1773838121_gg.jpg'
                                boxSize='200px'
                                objectFit='cover'
                                borderRadius='20px'
                                boxShadow='1px 1px 2px lightgray'
                                />
                                <Text m='10px'>Placa de Vídeo ASRock RX 6600 Challenger White AMD Radeon 8GB</Text>
                                <Text>R$ 1.499,99</Text>

                            </Flex>
                        </Flex>                        
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}