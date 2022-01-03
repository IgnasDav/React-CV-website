import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  inset: 0;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Text = styled(motion.p)`
  position: absolute;
  z-index: 50;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--fontSizeL);
  color: var(--white);
  font-family: "Rock 3D", cursive;
`;
export const TextWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  color: var(--gray);
  fill: currentColor;
`;
export const Content = styled(motion.div)`
  position: relative;
  z-index: 50;
  width: 100%;
  background-color: var(--black);
`;
