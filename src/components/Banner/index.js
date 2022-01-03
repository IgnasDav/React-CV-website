import { motion } from "framer-motion";
//Styles
import { Wrapper } from "./Banner.style";
//Animation
const image = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    overflow: "hidden",
    transition: {
      duration: 2.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const Banner = ({ img, alt, height }) => (
  <Wrapper
    height={height}
    img={img}
    alt={alt}
    as={motion.div}
    variants={image}
    animate="animate"
    initial="initial"
  />
);
export default Banner;
