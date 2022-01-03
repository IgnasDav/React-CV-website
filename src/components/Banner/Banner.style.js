import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  background: ${({ img }) => (img ? `url(${img})` : "var(--green)")};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
  height: ${({ height }) => (height ? "60rem" : "80rem")};
`;
