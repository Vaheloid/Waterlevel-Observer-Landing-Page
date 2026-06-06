import { Box, Text, Heading, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import config from '../../public/config.json';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

export default function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
      px={{ base: 4, sm: 6 }} 
      py="96px"
    >
      <Box maxW="4xl" mx="auto">
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          position="relative"
          overflow="hidden"
          borderRadius="3xl"
          p={{ base: 10, sm: 16 }}
          textAlign="center"
          style={{
            background: "rgba(14, 30, 70, 0.5)",
            border: "1px solid rgba(100, 170, 255, 0.15)",
            backdropFilter: "blur(30px) saturate(180%)",
            WebkitBackdropFilter: "blur(30px) saturate(180%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 40px 100px rgba(0,0,0,0.4)",
          }}
        >
          <Box
            position="absolute"
            inset={0}
            pointerEvents="none"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(14,165,233,0.12) 0%, transparent 60%)",
            }}
          />
          
          <Box
            position="absolute"
            top={0}
            left={16}
            right={16}
            h="1px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(100,200,255,0.3), transparent)" }}
          />

          <MotionText
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            color="#38bdf8"
            fontSize="xs"
            fontWeight="medium"
            letterSpacing="widest"
            textTransform="uppercase"
            mb={4}
            fontFamily="'Inter', sans-serif"
          >
            Начать работу
          </MotionText>

          <MotionHeading
            as="h2"
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            color="white"
            mb={4}
            position="relative"
            fontFamily="'Inter', sans-serif"
            fontSize="clamp(1.8rem, 4vw, 2.8rem)"
            fontWeight={700}
            letterSpacing="-0.03em"
            lineHeight={1.15}
          >
            Защитите ваш регион
            <br />
            <Box as="span" color="rgba(255, 255, 255, 0.4)">
              уже сегодня
            </Box>
          </MotionHeading>

          <MotionText
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            color="rgba(255, 255, 255, 0.4)"
            maxW="lg"
            mx="auto"
            mb={10}
            fontSize="sm"
            fontFamily="'Inter', sans-serif"
            lineHeight={1.7}
          >
            Запросите демонстрацию системы или свяжитесь с нашей командой для обсуждения
            внедрения в вашем регионе. Первый месяц — бесплатно.
          </MotionText>

          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            alignItems="center"
            justifyContent="center"
            gap={4}
          >
            <chakra.a
              href="#footer"
              onClick={(e) => handleScroll(e, "footer")}
              display="flex"
              alignItems="center"
              gap="10px"
              px={8}
              py="14px"
              borderRadius="2xl"
              color="white"
              fontWeight="medium"
              transition="all 0.3s"
              _hover={{ transform: "scale(1.05)", textDecoration: "none" }}
              _active={{ transform: "scale(0.95)" }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                background: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
                boxShadow: "0 0 40px rgba(14,165,233,0.3), 0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                cursor: "pointer"
              }}
            >
              <Mail size={15} />
              Написать нам
            </chakra.a>

            <chakra.a
              href={config.HOST}
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="10px"
              px={8}
              py="14px"
              borderRadius="2xl"
              fontWeight="medium"
              transition="all 0.3s"
              _hover={{ bg: "rgba(255,255,255,0.1)", transform: "scale(1.05)", textDecoration: "none" }}
              _active={{ transform: "scale(0.95)" }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.6)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer"
              }}
            >
              Войти
              <ArrowRight 
                size={16} 
                className="arrow-icon" 
                style={{ transition: "transform 0.3s" }} 
              />
            </chakra.a>
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  );
}