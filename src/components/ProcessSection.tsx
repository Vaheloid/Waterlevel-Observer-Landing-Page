import { Box, SimpleGrid, Text, Heading, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Radio, Cpu, Map, BellRing } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Radio,
    title: "Сбор данных",
    desc: "Датчики измеряют уровень воды каждые 15 минут. Данные передаются через защищённые каналы.",
    accent: "#0ea5e9",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Обработка и анализ",
    desc: "Скоростной математический алгоритм аккумулирует и анализирует данные уровня. Учитываются рельеф местности.",
    accent: "#818cf8",
  },
  {
    number: "03",
    icon: Map,
    title: "Визуализация",
    desc: "Интерактивные карты отображают зоны риска, траектории паводков и зоны затопления в режиме реального времени.",
    accent: "#34d399",
  },
  {
    number: "04",
    icon: BellRing,
    title: "Оповещение",
    desc: "Автоматические уведомления в МЧС, местные администрации и населению через SMS, push-уведомления и сирены.",
    accent: "#f59e0b",
  },
];

const MotionBox = motion(Box);

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Box as="section" position="relative" px={{ base: 4, sm: 6 }} py="96px">
      <Box maxW="7xl" mx="auto">
        
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
            color="#38bdf8" // Прямой аналог Tailwind sky-400
            fontSize="xs"
            fontWeight="medium"
            letterSpacing="widest"
            textTransform="uppercase"
            mb={3}
            fontFamily="'Inter', sans-serif"
          >
            Как работает
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
            От датчика
            <br />
            <Box as="span" color="rgba(255, 255, 255, 0.4)">
              до принятия решений
            </Box>
          </Heading>
        </MotionBox>

        {/* Сетка шагов */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={3} position="relative">
          
          {/* Соединительная горизонтальная линия (видима только на больших экранах) */}
          <Box
            display={{ base: "none", lg: "block" }}
            position="absolute"
            top="40px"
            left="12.5%"
            right="12.5%"
            h="1px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 15%, rgba(255,255,255,0.06) 85%, transparent)"
            }}
          />

          {steps.map(({ number, icon: Icon, title, desc, accent }, i) => (
            <MotionBox
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
              position="relative"
              p={6}
              borderRadius="2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Иконка и Номер шага */}
              <Flex alignItems="center" gap={3} mb={5}>
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                  style={{
                    background: `${accent}18`,
                    border: `1px solid ${accent}30`,
                    boxShadow: `0 0 20px ${accent}20`,
                  }}
                >
                  <Icon size={18} style={{ color: accent }} />
                </Box>
                <Box
                  as="span"
                  color="rgba(255, 255, 255, 0.15)"
                  fontWeight="bold"
                  fontFamily="'Inter', sans-serif"
                  fontSize="1.6rem"
                  letterSpacing="-0.04em"
                >
                  {number}
                </Box>
              </Flex>

              {/* Заголовок карточки */}
              <Heading
                as="h3"
                color="rgba(255, 255, 255, 0.85)"
                mb={2}
                fontFamily="'Inter', sans-serif"
                fontSize="0.95rem"
                fontWeight={600}
                letterSpacing="-0.01em"
              >
                {title}
              </Heading>

              {/* Описание */}
              <Text
                color="rgba(255, 255, 255, 0.35)"
                fontSize="sm"
                fontFamily="'Inter', sans-serif"
                lineHeight={1.65}
              >
                {desc}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}