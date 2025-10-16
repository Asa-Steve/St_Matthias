import { motion } from "framer-motion";
import styled from "styled-components";

const ServiceImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: relative;
    z-index: 5;
  }
`;
const StyledBlob = styled(motion.div)`
  position: absolute;
  border: 1px solid;
  height: 40px;
  width: 40px;
  outline: 2px solid var(--color-secondary);
  outline-offset: 2px;
  border-radius: 50%;
  background-color: var(--color-primary);
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
`;

const Blob = ({ image, heading, text, isInView }) => {
  return (
    <>
      <ServiceImg>
        <img src={image} alt="dome icon" />
        <StyledBlob
          animate={
            isInView
              ? {
                  y: [0, -15, -15],
                  scale: [0, 1.2, 1],
                  x: [-20, -20, -20],
                }
              : false
          }
          transition={{ duration: 1 }}
        />
      </ServiceImg>
      <h3>{heading}</h3>
      <p>{text}</p>
    </>
  );
};

export default Blob;
