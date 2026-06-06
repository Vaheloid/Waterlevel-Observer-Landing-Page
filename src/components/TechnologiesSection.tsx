import { Box, SimpleGrid, Text, Heading, Flex } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { useRef } from "react";
import { useInView } from 'framer-motion';

const techGroups = [
  {
    label: "Бэкенд",
    accent: "#818cf8",
    rgb: "129,140,248",
    items: [".NET", "C#", "ASP.NET", "PostgreSQL", "Nginx"],
  },
  {
    label: "Фронтенд",
    accent: "#38bdf8",
    rgb: "56,189,248",
    items: ["React", "TypeScript", "React Leaflet", "React Query", "Turf.js"],
  },
  {
    label: "Устройства / IoT",
    accent: "#34d399",
    rgb: "52,211,153",
    items: ["nanoFramework C#", "MQTT", "GPRS", "LoRa"],
  },
  {
    label: "Инфраструктура",
    accent: "#f59e0b",
    rgb: "245,158,11",
    items: ["OSM", "Linux", "RabbitMQ"],
  },
];

const MotionBox = motion(Box);

export default function TechnologiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Box 
      as="section" 
      position="relative" 
      px={{ base: 4, sm: 6 }} 
      py="96px"
    >
      {/* Фоновое радиальное свечение */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="700px"
        h="400px"
        pointerEvents="none"
        style={{
          background: "radial-gradient(ellipse, rgba(129,140,248,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <Box maxW="7xl" mx="auto" position="relative">
        {/* Заголовок секции */}
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          textAlign="center"
          mb="64px"
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
            Технологии
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
            Современный стек
            <br />
            <Box as="span" color="rgba(255, 255, 255, 0.4)">
              проверенные решения
            </Box>
          </Heading>
        </MotionBox>

        {/* Сетка категорий технологий */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={4}>
          {techGroups.map(({ label, accent, rgb, items }, gi) => (
            <MotionBox
              key={label}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              position="relative"
              p={5}
              borderRadius="2xl"
              overflow="hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Верхняя светящаяся грань карточки */}
              <Box
                position="absolute"
                top={0}
                left={4}
                right={4}
                h="1px"
                style={{ background: `linear-gradient(90deg, transparent, ${accent}40, transparent)` }}
              />

              {/* Название категории (Заголовок группы) */}
              <Flex alignItems="center" gap={2} mb={4}>
                <Box
                  w="6px"
                  h="6px"
                  borderRadius="full"
                  flexShrink={0}
                  style={{ background: accent, boxShadow: `0 0 6px ${accent}` }}
                />
                <Box
                  as="span"
                  fontSize="xs"
                  fontWeight="medium"
                  textTransform="uppercase"
                  letterSpacing="widest"
                  style={{ fontFamily: "'Inter', sans-serif", color: accent, opacity: 0.8 }}
                >
                  {label}
                </Box>
              </Flex>

              {/* Область бэджей (технологий) */}
              <Flex flexWrap="wrap" gap={2}>
                {items.map((tech, ti) => (
                  <MotionBox
                    key={tech}
                    as="span"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: gi * 0.1 + ti * 0.05 + 0.2 }}
                    px={3}
                    py="6px" // Эквивалент py-1.5
                    borderRadius="lg"
                    fontSize="xs"
                    fontWeight="medium"
                    display="inline-block"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      background: `rgba(${rgb}, 0.1)`,
                      border: `1px solid rgba(${rgb}, 0.2)`,
                      color: `rgba(${rgb}, 0.9)`,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {tech}
                  </MotionBox>
                ))}
              </Flex>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* Декоративная разделительная линия снизу секции */}
        <MotionBox
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          mt="64px"
          h="1px"
          mx="auto"
          maxW="lg"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
        />
      </Box>
    </Box>
  );
}