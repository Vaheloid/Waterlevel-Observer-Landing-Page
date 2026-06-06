import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Mail, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoFacie from "../../src/imports/logo-facie.png";
import logo from '../imports/waterlevel_logo22_white.png';

// Изменяем массив ссылок на объекты с ID соответствующих секций
const productLinks = [
  { name: "Возможности", id: "features" },
  { name: "Как работает", id: "process" },
  { name: "Технологии", id: "technologies" },
  { name: "Контакты", id: "footer" }, // Ссылка на документацию, если появится такая секция/страница
];

export default function Footer() {
  
  // Функция плавного скролла с отступом под фиксированную шапку
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      const yOffset = -90; // Компенсация высоты fixed-шапки
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Box
      as="footer"
      id="footer" // Добавляем ID самому футеру, чтобы NavBar мог скроллить сюда
      position="relative"
      px={{ base: 4, sm: 6 }}
      py="64px"
      mt="32px"
      borderTop="1px solid rgba(255, 255, 255, 0.06)"
    >
      {/* Фоновый градиент */}
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        style={{
          background: "linear-gradient(to top, rgba(14,165,233,0.03) 0%, transparent 100%)",
        }}
      />

      <Box maxW="7xl" mx="auto" position="relative">
        {/* Основная сетка футера */}
        <Box
          display="grid"
          gridTemplateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
          gap="40px"
          mb="64px"
        >
          {/* Блок бренда */}
          <Box gridColumn={{ base: "span 2", sm: "span 1" }}>
            <Flex alignItems="center" gap={3} mb={4}>
              <Image 
                src={logo} 
                alt="Waterlevel Observer Logo" 
                w="32px" 
                h="32px" 
                objectFit="contain" 
              />
              <Text
                as="span"
                fontWeight="semibold"
                color="white"
                fontSize="sm"
                fontFamily="'Inter', sans-serif"
              >
                Waterlevel Observer
              </Text>
            </Flex>
            <Text
              color="rgba(255, 255, 255, 0.3)"
              fontSize="sm"
              fontFamily="'Inter', sans-serif"
              lineHeight={1.7}
            >
              Интеллектуальная система
              <br />
              мониторинга и прогнозирования
              <br />
              паводковых ситуаций.
            </Text>
          </Box>

          {/* Блок ссылок "Продукт" */}
          <Box>
            <Text
              color="rgba(255, 255, 255, 0.6)"
              fontSize="xs"
              fontWeight="medium"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={4}
              fontFamily="'Inter', sans-serif"
            >
              Продукт
            </Text>
            <Box 
              as="ul" 
              display="flex" 
              flexDirection="column" 
              gap="10px"
              style={{ listStyleType: "none", padding: 0, margin: 0 }}
            >
              {productLinks.map((link) => (
                <Box as="li" key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => handleScroll(e, link.id)}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      color="rgba(255, 255, 255, 0.3)"
                      _hover={{ color: "rgba(255, 255, 255, 0.6)" }}
                      transition="colors 0.2s"
                      fontSize="sm"
                      fontFamily="'Inter', sans-serif"
                    >
                      {link.name}
                    </Box>
                  </a>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Блок контактов */}
          <Box>
            <Text
              color="rgba(255, 255, 255, 0.6)"
              fontSize="xs"
              fontWeight="medium"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={4}
              fontFamily="'Inter', sans-serif"
            >
              Контакты
            </Text>
            <Box 
              as="ul" 
              display="flex" 
              flexDirection="column" 
              gap="12px"
              style={{ listStyleType: "none", padding: 0, margin: 0 }}
            >
              {/* Email */}
              <Box as="li">
                <a href="mailto:kamilasd@yandex.ru" style={{ textDecoration: "none" }}>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="10px"
                    color="rgba(255, 255, 255, 0.4)"
                    _hover={{ 
                      color: "rgba(255, 255, 255, 0.7)",
                      "& .icon-wrapper": { bg: "rgba(14, 165, 233, 0.2)" } 
                    }}
                    transition="colors 0.2s"
                  >
                    <Box
                      className="icon-wrapper"
                      w="28px"
                      h="28px"
                      borderRadius="lg"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      transition="colors 0.2s"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <Mail size={13} style={{ color: "#38bdf8" }} />
                    </Box>
                    <Text as="span" fontSize="sm" fontFamily="'Inter', sans-serif">
                      kamilasd@yandex.ru
                    </Text>
                  </Box>
                </a>
              </Box>

              {/* Телефон */}
              <Box as="li">
                <a href="tel:+79276355530" style={{ textDecoration: "none" }}>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="10px"
                    color="rgba(255, 255, 255, 0.4)"
                    _hover={{ 
                      color: "rgba(255, 255, 255, 0.7)",
                      "& .icon-wrapper": { bg: "rgba(14, 165, 233, 0.2)" } 
                    }}
                    transition="colors 0.2s"
                  >
                    <Box
                      className="icon-wrapper"
                      w="28px"
                      h="28px"
                      borderRadius="lg"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      transition="colors 0.2s"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <Phone size={13} style={{ color: "#38bdf8" }} />
                    </Box>
                    <Text as="span" fontSize="sm" fontFamily="'Inter', sans-serif">
                      +7 927 635-55-30
                    </Text>
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>

          {/* Блок "Партнёры" */}
          <Box>
            <Text
              color="rgba(255, 255, 255, 0.6)"
              fontSize="xs"
              fontWeight="medium"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={4}
              fontFamily="'Inter', sans-serif"
            >
              Партнёры
            </Text>
            <Flex flexDirection="column" gap={3}>
              <a href="#" style={{ textDecoration: "none", width: "fit-content" }}>
                <Box
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  p={3}
                  borderRadius="xl"
                  transition="all 0.2s"
                  _hover={{ transform: "scale(1.05)" }}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  <ImageWithFallback
                    src={logoFacie}
                    alt="Facie — партнёр системы мониторинга"
                    style={{ 
                      height: "32px",
                      width: "auto",
                      objectFit: "contain",
                      filter: "brightness(0.9) contrast(1.05)" 
                    }}
                  />
                </Box>
              </a>
            </Flex>
          </Box>
        </Box>

        {/* Нижняя панель (Bottom bar) */}
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={4}
          pt={8}
          borderTop="1px solid rgba(255, 255, 255, 0.06)"
        >
          <Text
            color="rgba(255, 255, 255, 0.2)"
            fontSize="xs"
            fontFamily="'Inter', sans-serif"
          >
            2026 П3 Солюшенс. Все права защищены.
          </Text>
          <Flex alignItems="center" gap={6}>
            {/* Дополнительные ссылки */}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}