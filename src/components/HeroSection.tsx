import { motion } from "framer-motion";
import { Gauge, Activity, Zap } from "lucide-react";
import { Box, Flex, Text, chakra } from "@chakra-ui/react";
import config from '../../public/config.json';

interface GlowItem {
  color: string;
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  i: number;
}

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);
const MotionFlex = motion.create(Flex);

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -18, 8, -12, 0],
    x: [0, 12, -8, 15, 0],
    scale: [1, 1.08, 0.96, 1.04, 1],
    transition: {
      duration: 14 + i * 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }),
};

const glows: GlowItem[] = [
  { color: "rgba(14, 165, 233, 0.22)", size: 600, top: "-10%", left: "10%", i: 0 },
  { color: "rgba(99, 102, 241, 0.15)", size: 500, top: "20%", right: "5%", i: 1 },
  { color: "rgba(6, 182, 212, 0.18)", size: 400, bottom: "5%", left: "40%", i: 2 },
];

const pills = [
  { icon: Gauge, label: "Скорость вычисления", value: "примерно 15 сек" },
  { icon: Activity, label: "Данные в реальном времени", value: "≤ 2 сек задержка" },
  { icon: Zap, label: "Точность прогноза", value: "91.2%" },
];

export default function HeroSection() {
  // Используем lenis для плавного скролла
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(`#${id}`, { offset: -90 });
    }
  };

  return (
    <Box
      as="section"
      position="relative"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={{ base: "4", sm: "6" }}
      overflow="hidden"
    >
      {/* Background glows */}
      {glows.map((g, i) => (
        <MotionBox
          key={i}
          position="absolute"
          borderRadius="full"
          pointerEvents="none"
          custom={g.i}
          variants={floatVariants}
          animate="animate"
          w={`${g.size}px`}
          h={`${g.size}px`}
          top={g.top}
          left={g.left}
          right={g.right}
          bottom={g.bottom}
          style={{
            background: `radial-gradient(circle, ${g.color} 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
      ))}

      {/* Grid background */}
      <Box
        position="absolute"
        inset="0"
        pointerEvents="none"
        opacity="0.04"
        css={{
          backgroundImage:
            "linear-gradient(rgba(100,180,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(100,180,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radar rings */}
      {[1, 2, 3].map((n) => (
        <MotionBox
          key={n}
          position="absolute"
          borderRadius="full"
          border="1px solid"
          borderColor="rgba(56, 189, 248, 0.1)"
          pointerEvents="none"
          w={`${n * 280}px`}
          h={`${n * 280}px`}
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 5 + n * 1.5, repeat: Infinity, delay: n * 0.8, ease: "easeInOut" }}
        />
      ))}

      {/* Main Content */}
      <Box position="relative" zIndex="10" maxW="5xl" mx="auto" textAlign="center" pt="28" pb="20">
        
        {/* Badge */}
        <MotionFlex
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          display="inline-flex"
          alignItems="center"
          gap="2"
          px="4"
          py="1.5"
          borderRadius="full"
          mb="8"
          css={{
            background: "rgba(14, 165, 233, 0.1)",
            border: "1px solid rgba(14, 165, 233, 0.25)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <Box
            w="1.5"
            h="1.5"
            borderRadius="full"
            bg="rgba(56, 189, 248, 1)"
            css={{
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              "@keyframes pulse": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: .5 },
              }
            }}
          />
          <Text 
            color="rgba(125, 211, 252, 1)" 
            fontSize="xs" 
            fontWeight="medium" 
            letterSpacing="wider" 
            textTransform="uppercase"
            fontFamily="'Inter', sans-serif"
          >
            Система активна · Мониторинг в реальном времени
          </Text>
        </MotionFlex>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            color: "white",
            marginBottom: "24px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(2.8rem, 7vw, 5rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
          }}
        >
          Интеллектуальный
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 60%, #34d399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
            }}
          >
            мониторинг паводков
          </span>
        </motion.h1>

        {/* Subtitle */}
        <MotionText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          color="rgba(255, 255, 255, 0.5)"
          maxW="2xl"
          mx="auto"
          mb="10"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          Прогнозирование и анализ паводковых ситуаций на основе данных гидрологических
          датчиков и спутниковых снимков. Защита населения и инфраструктуры.
        </MotionText>

        {/* CTAs */}
        <MotionFlex
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          flexDirection={{ base: "column", sm: "row" }}
          alignItems="center"
          justifyContent="center"
          gap="4"
          mb="16"
        >
          <chakra.a
            href="#footer"
            onClick={(e) => handleScroll(e, "footer")}
            display="flex"
            alignItems="center"
            gap="2.5"
            px="7"
            py="3.5"
            borderRadius="2xl"
            color="white"
            fontWeight="medium"
            transition="all 300ms"
            _hover={{ transform: "scale(1.05)", textDecoration: "none" }}
            _active={{ transform: "scale(0.95)" }}
            css={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              background: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
              boxShadow: "0 0 30px rgba(14,165,233,0.35), 0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              cursor: "pointer"
            }}
          >
            Написать нам
          </chakra.a>
          
          <chakra.a
            href={config.HOST}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="2"
            px="7"
            py="3.5"
            borderRadius="2xl"
            fontWeight="medium"
            transition="all 300ms"
            _hover={{ bg: "rgba(255,255,255,0.1)", transform: "scale(1.05)", textDecoration: "none" }}
            _active={{ transform: "scale(0.95)" }}
            css={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.7)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              cursor: "pointer"
            }}
          >
            Войти
          </chakra.a>
        </MotionFlex>

        {/* Pills (Stats) */}
        <MotionFlex
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          flexDirection={{ base: "column", sm: "row" }}
          alignItems="center"
          justifyContent="center"
          gap="3"
        >
          {pills.map(({ icon: Icon, label, value }) => (
            <Flex
              key={label}
              alignItems="center"
              gap="3"
              px="4"
              py="2.5"
              borderRadius="xl"
              css={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <Box as="span" display="inline-flex" color="rgba(56, 189, 248, 1)">
                <Icon size={14} />
              </Box>
              <Text color="rgba(255, 255, 255, 0.4)" fontSize="xs" fontFamily="'Inter', sans-serif">
                {label}
              </Text>
              <Text color="rgba(255, 255, 255, 0.8)" fontSize="xs" fontWeight="medium" fontFamily="'Inter', sans-serif">
                {value}
              </Text>
            </Flex>
          ))}
        </MotionFlex>
      </Box>

      {/* Scroll indicator */}
      <MotionBox
        position="absolute"
        bottom="8"
        left="50%"
        transform="translateX(-50%)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Text color="rgba(255, 255, 255, 0.25)" fontSize="xs" fontFamily="'Inter', sans-serif">
          прокрутите
        </Text>
        <MotionBox
          w="px"
          h="10"
          css={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)",
          }}
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </MotionBox>
    </Box>
  );
}