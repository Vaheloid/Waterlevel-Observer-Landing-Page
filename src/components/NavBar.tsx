import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Box, Flex, Text, chakra, Image } from "@chakra-ui/react";
import logo from '../imports/waterlevel_logo22_white.png';
import config from '../../public/config.json';

const links = [
  { name: "Возможности", id: "features" },
  { name: "Как работает", id: "process" },
  { name: "Технологии", id: "technologies" },
  { name: "Контакты", id: "footer" },
];

const MotionHeader = motion.create(Box);
const MotionDiv = motion.create(Box);

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);

    // Безопасное обращение к lenis через глобальный объект window
    if (window.lenis) {
      window.lenis.scrollTo(`#${id}`, { offset: -90 });
    } else {
      // Фолбэк, если lenis вдруг не инициализирован
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionHeader
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="50"
      px={{ base: "4", sm: "6" }}
      pt="4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        align="center"
        justify="space-between"
        px="5"
        py="3"
        borderRadius="2xl"
        transition="all 500ms"
        bg={scrolled ? "rgba(6, 12, 28, 0.75)" : "rgba(10, 20, 45, 0.45)"}
        backdropFilter="blur(28px) saturate(200%)"
        border="1px solid rgba(100, 170, 255, 0.13)"
        boxShadow={
          scrolled
            ? "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04)"
        }
        css={{ WebkitBackdropFilter: "blur(28px) saturate(200%)" }}
      >
        <Flex align="center" gap="3">
          <Image src={logo} alt="Logo" w="8" h="8" objectFit="contain" />
          <Text fontWeight="semibold" color="white" fontSize="sm" letterSpacing="wide">
            Waterlevel Observer
          </Text>
        </Flex>

        <Box as="nav" display={{ base: "none", md: "flex" }} alignItems="center" gap="7">
          {links.map((item) => (
            <chakra.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              fontSize="sm"
              color="white/60"
              transition="color 200ms"
              _hover={{ color: "white" }}
            >
              {item.name}
            </chakra.a>
          ))}
        </Box>

        <Flex display={{ base: "none", md: "flex" }} align="center" gap="3">
           <chakra.a href={config.HOST} fontSize="sm" color="white/60" transition="color 200ms" px="3" _hover={{ color: "white" }}>
            Войти
          </chakra.a>
          <chakra.a
            href="#footer"
            onClick={(e) => handleScroll(e, "footer")}
            px="4"
            py="2"
            borderRadius="xl"
            fontSize="sm"
            bg="linear-gradient(135deg, rgba(14,165,233,0.9), rgba(59,130,246,0.9))"
            color="white"
            _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
          >
            Написать нам
          </chakra.a>
        </Flex>

        <Box as="button" display={{ base: "block", md: "none" }} color="white/70" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </Box>
      </Flex>

      {/* Мобильное меню */}
      <AnimatePresence>
        {menuOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            display={{ base: "flex", md: "none" }}
            flexDirection="column"
            gap="4"
            px="5"
            py="4"
            mt="2"
            borderRadius="2xl"
            bg="rgba(6, 12, 28, 0.9)"
            backdropFilter="blur(28px) saturate(200%)"
            border="1px solid rgba(100, 170, 255, 0.13)"
          >
            {links.map((item) => (
              <chakra.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                color="white/70"
              >
                {item.name}
              </chakra.a>
            ))}
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionHeader>
  );
}