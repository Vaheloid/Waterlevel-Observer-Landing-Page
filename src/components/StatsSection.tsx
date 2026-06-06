import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: "≈ 15 сек", label: "Скорость вычисления прогноза", desc: "от поступления данных до результата" },
  { value: "91.2%", label: "Точность прогноза", desc: "паводковых ситуаций" },
  { value: "24/7", label: "Непрерывный мониторинг", desc: "без перерывов и праздников" },
];

const MotionBox = motion(Box);

function StatCard({ value, label, desc, index }: { value: string; label: string; desc: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1, 
        ease: [0.22, 1, 0.36, 1] as const 
      }}
      className="group" // Добавлено для корректной работы CSS-селектора группы
      data-group        // Добавлено для интеграции с внутренними механизмами Chakra v3
      position="relative"
      p={6}
      borderRadius="2xl"
      overflow="hidden"
      background="rgba(255,255,255,0.04)"
      border="1px solid rgba(255,255,255,0.08)"
      backdropFilter="blur(20px) saturate(180%)"
      boxShadow="inset 0 1px 0 rgba(255,255,255,0.06)"
    >
      {/* Верхняя тонкая линия-акцент */}
      <Box
        position="absolute"
        top={0}
        left={4}
        right={4}
        h="1px"
        borderRadius="full"
        background="linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)"
      />
      
      {/* Радиальный градиент при ховере (теперь корректно реагирует на _groupHover) */}
      <Box
        position="absolute"
        inset={0}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        transition="opacity 500ms ease"
        borderRadius="2xl"
        pointerEvents="none"
        style={{ 
          background: "radial-gradient(circle at 50% 0%, rgba(14,165,233,0.12) 0%, transparent 70%)" 
        }}
      />

      {/* Значение (Value) с градиентным текстом */}
      <Text
        color="white"
        mb={1}
        fontFamily="'Inter', sans-serif"
        fontSize="clamp(1.8rem, 4vw, 2.4rem)"
        fontWeight={700}
        letterSpacing="-0.03em"
        css={{ 
          background: "linear-gradient(135deg, #fff 50%, rgba(255,255,255,0.6) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {value}
      </Text>

      {/* Лейбл */}
      <Text
        color="whiteAlpha.700"
        fontSize="sm"
        fontWeight="medium"
        mb={0.5}
        fontFamily="'Inter', sans-serif"
      >
        {label}
      </Text>

      {/* Описание */}
      <Text
        color="whiteAlpha.300"
        fontSize="xs"
        fontFamily="'Inter', sans-serif"
      >
        {desc}
      </Text>
    </MotionBox>
  );
}

export default function StatsSection() {
  return (
    <Box as="section" position="relative" px={{ base: 4, sm: 6 }} py={8}>
      <Box maxW="7xl" mx="auto">
        <SimpleGrid columns={{ base: 1, sm: 3 }} gap={3}>
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}