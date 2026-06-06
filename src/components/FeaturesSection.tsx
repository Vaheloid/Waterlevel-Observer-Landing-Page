import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { MapPin, BarChart3, Bell, Network } from "lucide-react";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";

const features = [
  {
    icon: MapPin,
    title: "Интерактивные карты зон",
    desc: "Визуализация зон затопления в реальном времени с наложением на топографические карты.",
    accent: "#0ea5e9",
    glow: "rgba(14, 165, 233, 0.15)",
    rgb: "14,165,233",
  },
  {
    icon: BarChart3,
    title: "Аналитика и прогноз",
    desc: "Использование сверхбыстрого математического алгоритма анализа данных для получения оперативного прогноза на 72 часа вперед.",
    accent: "#818cf8",
    glow: "rgba(129, 140, 248, 0.15)",
    rgb: "129,140,248",
  },
  {
    icon: Bell,
    title: "Система оповещений",
    desc: "Автоматические уведомления при превышении пороговых значений. Возможность интеграции с экстренными службами и МЧС России.",
    accent: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.12)",
    rgb: "245,158,11",
  },
  {
    icon: Network,
    title: "Сеть датчиков IoT",
    desc: "Распределённая infrastructure из гидрологических датчиков с LoRa и 4G подключением. Самодиагностика и резервные каналы.",
    accent: "#34d399",
    glow: "rgba(52, 211, 153, 0.12)",
    rgb: "52,211,153",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  desc,
  accent,
  glow,
  rgb,
  index,
}: (typeof features)[number] & { index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ scale: 1.02 }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
        scale: { duration: 0.3 }
      }}
      className="group"
      style={{
        position: "relative",
        padding: "24px",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "default",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <Box
        position="absolute"
        top="0"
        left="24px"
        right="24px"
        height="1px"
        background="linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)"
      />
      
      <Box
        position="absolute"
        inset="0"
        opacity="0"
        _groupHover={{ opacity: 1 }}
        transition="opacity 500ms"
        pointerEvents="none"
        borderRadius="16px"
        background={`radial-gradient(circle at 0% 0%, ${glow} 0%, transparent 65%)`}
      />

      <Box
        width="40px"
        height="40px"
        borderRadius="12px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom="16px"
        position="relative"
        zIndex={10}
        background={`rgba(${rgb}, 0.15)`}
        border={`1px solid ${accent}30`}
      >
        <Icon size={18} style={{ color: accent }} />
      </Box>

      <Heading
        as="h3"
        color="rgba(255, 255, 255, 0.9)"
        marginBottom="8px"
        position="relative"
        zIndex={10}
        fontFamily="'Inter', sans-serif"
        fontSize="0.95rem"
        fontWeight={600}
        letterSpacing="-0.01em"
      >
        {title}
      </Heading>

      <Text
        color="rgba(255, 255, 255, 0.4)"
        fontSize="sm"
        lineHeight="1.65"
        position="relative"
        zIndex={10}
        fontFamily="'Inter', sans-serif"
      >
        {desc}
      </Text>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Box 
      as="section" 
      id="features" // Полезно для скролла из предыдущего шага
      position="relative" 
      paddingX={{ base: "16px", sm: "24px" }} 
      paddingY="96px"
      overflow="hidden"
    >
      {/* Локальное фоновое свечение */}
      <Box
        position="absolute"
        top="20%"
        right="-150px"
        width="550px"
        height="550px"
        pointerEvents="none"
        zIndex={0}
        background="radial-gradient(circle, rgba(59,80,200,0.14) 0%, transparent 70%)"
        filter="blur(40px)"
      />

      <Box maxWidth="1280px" marginX="auto" position="relative" zIndex={1}>
        
        {/* Измененный блок: теперь он по центру */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ 
            marginBottom: "56px", 
            maxWidth: "576px", 
            marginLeft: "auto",  // Центрирование контейнера влево
            marginRight: "auto", // Центрирование контейнера вправо
          }}
        >
          <Text
            color="#38bdf8"
            fontSize="xs"
            fontWeight="medium"
            letterSpacing="widest"
            textTransform="uppercase"
            marginBottom="12px"
            fontFamily="'Inter', sans-serif"
            textAlign="center" // Выравнивание текста по центру
          >
            Возможности
          </Text>
          
          <Heading
            as="h2"
            color="white"
            marginBottom="16px"
            fontFamily="'Inter', sans-serif"
            fontSize="clamp(1.8rem, 4vw, 2.6rem)"
            fontWeight={700}
            letterSpacing="-0.03em"
            lineHeight={1.15}
            textAlign="center" // Выравнивание текста по центру
          >
            Всё необходимое
            <br />
            <Box as="span" color="rgba(255, 255, 255, 0.4)">
              для защиты территорий
            </Box>
          </Heading>
          
          <Text
            color="rgba(255, 255, 255, 0.4)"
            fontSize="sm"
            fontFamily="'Inter', sans-serif"
            lineHeight={1.7}
            textAlign="center" // Выравнивание текста по центру
          >
            Комплексная платформа объединяет сбор данных, аналитику и оповещение
            в едином интерфейсе для оперативных штабов и аналитиков.
          </Text>
        </motion.div>

        <Grid
          templateColumns={{
            base: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          }}
          gap="12px"
        >
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </Grid>

      </Box>
    </Box>
  );
}