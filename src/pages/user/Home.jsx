import { Box, Flex, Text, Image, Button, Icon } from '@chakra-ui/react';
import { BsCart3, BsCheckLg } from 'react-icons/bs';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Placa de Vídeo Challenger ASRock AMD Radeon RX 7600 8GB',
    price: 'R$ 1.996,65',
    img: 'https://images4.kabum.com.br/produtos/fotos/907814/placa-de-video-asrock-amd-radeon-rx-7600-challenger-pro-oc-8gb-gddr6-triple-fan-90-ga62zz-00uanf_1761582764_gg.jpg',
  },
  {
    id: 2,
    name: 'Placa De Vídeo Husky Alpha RX 580 AMD 8GB GDDR5',
    price: 'R$ 899,99',
    img: 'https://images1.kabum.com.br/produtos/fotos/692461/placa-de-video-husky-alpha-rx-580-amd-8gb-gddr5-256-bit-hdmi-dvi-displayport-hvg580_1773838121_gg.jpg',
  },
  {
    id: 3,
    name: 'Placa de Vídeo ASRock RX 6600 Challenger White AMD Radeon 8GB',
    price: 'R$ 1.499,99',
    img: 'https://images7.kabum.com.br/produtos/fotos/695107/placa-de-video-asrock-rx-6600-challenger-white-amd-radeon-8gb-gddr6-directx-12-ultimate-rdna-2-90-ga4uzz-00uanf_1742841360_gg.jpg',
  },
];

function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Box
      w='240px'
      bg='white'
      border='1px solid'
      borderColor='gray.100'
      borderRadius='14px'
      overflow='hidden'
      transition='all 0.25s'
      _hover={{ boxShadow: '0 8px 28px rgba(0,0,0,0.09)', transform: 'translateY(-4px)' }}
    >
      <Flex bg='gray.50' h='180px' align='center' justify='center' p='16px'>
        <Image
          src={product.img}
          boxSize='140px'
          objectFit='cover'
          borderRadius='8px'
        />
      </Flex>

      <Box p='14px 16px 18px'>
        <Text fontSize='13px' color='gray.500' fontWeight='500' mb='10px' minH='38px' lineHeight='1.45'>
          {product.name}
        </Text>
        <Text fontSize='20px' fontWeight='700' color='gray.900' mb='14px'>
          {product.price}
        </Text>
        <Button
          w='full'
          bg={added ? 'green.500' : 'gray.900'}
          color='white'
          borderRadius='8px'
          fontSize='13px'
          fontWeight='600'
          leftIcon={<Icon as={added ? BsCheckLg : BsCart3} />}
          _hover={{ bg: added ? 'green.400' : 'gray.700' }}
          _active={{ transform: 'scale(0.97)' }}
          onClick={handleAdd}
        >
          {added ? 'Adicionado!' : 'Adicionar ao carrinho'}
        </Button>
      </Box>
    </Box>
  );
}

export function Home() {
  return (
    <Box p='40px 24px'>
      <Text fontSize='22px' fontWeight='700' color='gray.900' mb='28px'>
        Mais Vendidos
      </Text>
      <Flex gap='16px' wrap='wrap'>
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </Flex>
    </Box>
  );
}