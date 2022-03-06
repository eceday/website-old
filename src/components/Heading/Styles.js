import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled.header`
  opacity: 80%;
  background-color: #2685B5;
  width:-webkit-fill-available;
  position: fixed;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  z-index: 2;
  margin:0;
`;

export const Nav = styled(motion.nav)`
  background-color: #00629B;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Link = styled(motion.li)`
  color: white;
  opacity: 100%;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
  list-style: none;
  text-decoration: none;
`;

export const SvgBox = styled(motion.div)``;