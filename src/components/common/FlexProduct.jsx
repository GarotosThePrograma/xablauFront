import { Flex } from '@chakra-ui/react';

export function FlexProduct({ children, ...props }) {
  return (
    <Flex
        w="300"
        h="320px"    
        bg="gray.50"
        p={4}       
        direction="column"
        borderRadius='20px'
        boxShadow='1px 1px 2px lightgray'
        justify='center'
        align='center'
      {...props}    
    >
      {children}
    </Flex>
  );
}