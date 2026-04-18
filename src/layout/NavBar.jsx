// NavBar.jsx — sem NavBar.css
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Xablau } from '../components/common/Xablau.jsx';
import { UserCircle } from 'lucide-react';
import { MdShoppingCart, MdFavorite, MdMenu, MdClose } from 'react-icons/md';
import { Box, Flex, Input, IconButton } from '@chakra-ui/react';
import { FlexHoverOrange } from '@/components/ui/FlexHoverOrange.jsx';

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeTab = () => setIsMobile(window.innerWidth < 600);
    resizeTab();
    window.addEventListener('resize', resizeTab);
    return () => window.removeEventListener('resize', resizeTab);
  }, []);

  // fecha menu se redimensionar pra desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  return (
    <Box
      w="100%"
      bgGradient="to-b"
      gradientFrom="#3695e3"
      gradientTo="#004d8e"
      borderBottom="2px solid #e27d35"
    >
      {/* barra principal */}
      <Flex
        h="124px"
        align="center"
        justify="space-between"
        px={6}
      >
        {/* logo */}
        <Box as="h1" color="white" m={0}>
          <Link to={'/'}>
            <Xablau />
          </Link>
        </Box>

        {/* search */}
        <Box flexGrow={1} mx={4} maxW="700px">
          <Input
            placeholder="Busque na Xablau!"
            bg="aliceblue"
            border="1.5px solid lightgrey"
            borderRadius="12px"
            h="30px"
            px={3}
            minW="150px"
            w="100%"
            _focus={{ outline: '1px solid #FE6C04' }}
            _active={{ transform: 'scale(0.95)' }}
            transition="all 0.3s cubic-bezier(0.19, 1, 0.22, 1)"
          />
        </Box>

        {/* itens desktop */}
        {!isMobile && (
          <Flex align="center" gap={5}>
            <Flex
              as={Link}
              to="/login"
              align="center"
              gap={2}
              color="white"
              textDecoration="none"
            >
              <FlexHoverOrange>
                  <UserCircle
                    size={42}
                    strokeWidth={1.5}
                  />
                  Entre<br />ou Cadastre-se
              </FlexHoverOrange>

            </Flex>
            <FlexHoverOrange gap={4} color="white">
              <MdFavorite size={30}  />
            </FlexHoverOrange>

            <FlexHoverOrange gap={4} color="white">
              <MdShoppingCart size={35} />
            </FlexHoverOrange>
          </Flex>
        )}

        {/* botão hamburguer */}
        {isMobile && (
          <IconButton
            aria-label="Menu"
            variant="ghost"
            color="white"
            _hover={{ bg: 'whiteAlpha.200' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
          </IconButton>
        )}
      </Flex>

      {/* menu mobile */}
      <Box
        overflow="hidden"
        maxH={menuOpen ? '200px' : '0'}
        opacity={menuOpen ? 1 : 0}
        transform={menuOpen ? 'translateY(0)' : 'translateY(-8px)'}
        borderTop={menuOpen ? '1px solid #5bb1f6' : '1px solid transparent'}
        px={menuOpen ? 6 : 6}
        py={menuOpen ? 4 : 0}
        transition="max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease, transform 0.3s cubic-bezier(0.4,0,0.2,1), padding 0.3s ease"
      >
        <Flex justify="space-between">
          <Flex
            as={Link}
            to="/login"
            align="center"
            gap={2}
            color="white"
            textDecoration="none"
            onClick={() => setMenuOpen(false)}
          >
            <UserCircle size={36} strokeWidth={1.5} />
            <Box>Entre ou Cadastre-se</Box>
          </Flex>
          <Flex gap={6}>
            <MdFavorite size={30} color="white" />
            <MdShoppingCart size={35} color="white" />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}