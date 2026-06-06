import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import systemScreenshot from "../../src/imports/image.png";
import { AlertTriangle, TrendingUp, Wifi } from "lucide-react";

const annotations = [
  {
    icon: AlertTriangle,
    label: "Зона затопления",
    value: "Активна",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.2)",
    positionProps: { top: "24px", right: "24px" }, // Эквивалент top-6 right-6
  },
  {
    icon: TrendingUp,
    label: "Уровень воды",
    value: "+12 см/ч",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.1)",
    border: "rgba(239,68,68,0.2)",
    positionProps: { bottom: "96px", left: "24px" }, // Эквивалент bottom-24 left-6
  },
  {
    icon: Wifi,
    label: "Датчики онлайн",
    value: "238 / 240",
    color: "#34d399",
    bg: "rgba(52,211,153,0.1)",
    border: "rgba(52,211,153,0.2)",
    positionProps: { top: "24px", left: "24px" }, // Эквивалент top-6 left-6
  },
];

const MotionBox = motion(Box);

export default function PreviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Box 
      as="section" 
      position="relative" 
      px={{ base: 4, sm: 6 }} 
      py="96px" 
      overflow="hidden"
    >
      {/* Фоновое свечение позади скриншота */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="800px"
        h="500px"
        pointerEvents="none"
        style={{
          background: "radial-gradient(ellipse, rgba(14,165,233,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <Box maxW="7xl" mx="auto">
        {/* Заголовок секции */}
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          textAlign="center"
          mb="56px"
        >
          <Text
            color="#38bdf8" // Точный HEX-код цвета sky-400 из Tailwind
            fontSize="xs"
            fontWeight="medium"
            letterSpacing="widest"
            textTransform="uppercase"
            mb={3}
            fontFamily="'Inter', sans-serif"
          >
            Интерфейс системы
          </Text>
          <Heading
            as="h2"
            color="white"
            fontFamily="'Inter', sans-serif"
            fontSize="clamp(1.8rem, 4vw, 2.6rem)"
            fontWeight={700}
            letterSpacing="-0.03em"
            lineHeight={1.15}
          >
            Профессиональный
            <br />
            <Box as="span" color="rgba(255, 255, 255, 0.4)">
              инструмент для аналитиков
            </Box>
          </Heading>
        </MotionBox>

        {/* Фрейм со скриншотом */}
        <MotionBox
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          position="relative"
          mx="auto"
          maxW="5xl"
        >
          {/* Внешняя стеклянная рамка */}
          <Box
            p="2px"
            borderRadius="3xl"
            style={{
              background: "linear-gradient(135deg, rgba(100,180,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(100,150,255,0.15) 100%)",
              boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 60px rgba(14,165,233,0.08)",
            }}
          >
            <Box
              borderRadius="22px"
              overflow="hidden"
              bg="rgba(8,16,36,0.8)"
            >
              {/* Шапка окна приложения (Chrome bar) */}
              <Flex
                alignItems="center"
                gap={2}
                px={4}
                py={3}
                bg="rgba(255,255,255,0.04)"
                borderBottom="1px solid rgba(255,255,255,0.06)"
              >
                <Flex gap="6px">
                  <Box w="12px" h="12px" borderRadius="full" bg="rgba(239,68,68,0.6)" />
                  <Box w="12px" h="12px" borderRadius="full" bg="rgba(245,158,11,0.6)" />
                  <Box w="12px" h="12px" borderRadius="full" bg="rgba(52,211,153,0.6)" />
                </Flex>
                
                <Box
                  flex={1}
                  mx={4}
                  px={4}
                  py={1}
                  borderRadius="lg"
                  color="rgba(255,255,255,0.25)"
                  fontSize="xs"
                  textAlign="center"
                  bg="rgba(255,255,255,0.04)"
                  border="1px solid rgba(255,255,255,0.06)"
                  fontFamily="'Inter', sans-serif"
                >
                  ГидроМонитор — Система мониторинга паводков
                </Box>
              </Flex>

              {/* Сам скриншот */}
              <Box position="relative">
                <ImageWithFallback
                  src={systemScreenshot}
                  alt="Интерфейс системы мониторинга паводков — интерактивная карта с зонами затопления и данными датчиков"
                  className="w-full object-cover"
                  style={{ display: "block" }}
                />
                {/* Градиентное затемнение снизу */}
                <Box
                  position="absolute"
                  inset={0}
                  pointerEvents="none"
                  background="linear-gradient(to bottom, transparent 60%, rgba(6,12,24,0.6) 100%)"
                />
              </Box>
            </Box>
          </Box>

          {/* Всплывающие карточки аннотаций */}
          {annotations.map(({ icon: Icon, label, value, color, bg, border, positionProps }) => (
            <MotionBox
              key={label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              position="absolute"
              display="flex"
              alignItems="center"
              gap="10px"
              px="14px"
              py="10px"
              borderRadius="xl"
              pointerEvents="none"
              {...positionProps}
              style={{
                background: bg,
                border: `1px solid ${border}`,
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              }}
            >
              <Icon size={13} style={{ color }} />
              <Box>
                <Text
                  color="rgba(255,255,255,0.4)"
                  lineHeight="none"
                  mb="2px"
                  fontFamily="'Inter', sans-serif"
                  fontSize="10px"
                >
                  {label}
                </Text>
                <Text
                  lineHeight="none"
                  fontWeight="semibold"
                  fontFamily="'Inter', sans-serif"
                  fontSize="12px"
                  color={color}
                >
                  {value}
                </Text>
              </Box>
            </MotionBox>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
}