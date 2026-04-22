import { Flex, Image, Heading, Text, Span } from "@chakra-ui/react";

export function CartProductCard({ product }) {
    console.log(product)
    return (
        <Flex 
            p='20px'
            bg='white'
            border='1px solid'
            borderColor='gray.200'
            borderRadius='14px'
            overflow='hidden'
            transition='all 0.25s'
            _hover={{ boxShadow: '0 8px 28px rgba(0,0,0,0.09)', transform: 'translateY(-4px)', border: '1px solid #e27d35' }}  
        >
            <Flex>
                <Image
                        src={product.img} 
                        boxSize='150px'
                        objectFit='cover'
                        fallbackSrc='https://via.placeholder.com/100'
                    />
                <Flex direction='column'>
                    
                    <Heading >{product.name}</Heading>
                    <Text>Preço: <Span fontWeight='bold'>R$ {product.price}</Span> ou</Text>
                    <Text>3x de <Span fontWeight='bold'>R$ { (parseFloat(product.price.replace('.', '').replace(',', '.')) / 3).toFixed(2) }</Span></Text>
                </Flex>
            </Flex>
        </Flex>
    )
}