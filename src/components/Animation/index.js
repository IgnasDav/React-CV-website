//Styles
import { motion } from "framer-motion";
import { Wrapper, Content, Text, TextWrapper } from "./Animation.style";
//Animation settings
const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const text = {
  initial: {
    y: 0,
  },
  animate: {
    y: -1000,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  return (
    <Wrapper>
      <Content
        as={motion.div}
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      />
      <Text
        as={motion.p}
        variants={textContainer}
        initial="initial"
        animate="animate"
      >
        <TextWrapper
          as={motion.span}
          variants={text}
          animate="animate"
          initial="initial"
        >
          Ignas Davulis.
        </TextWrapper>
      </Text>
    </Wrapper>
  );
};
export default InitialTransition;
