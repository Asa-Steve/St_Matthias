import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { device } from "@/helpers/mediaQueries";

// Slide data
const slides = [
  {
    image: "/images/slide1.jpg",
    title: "Welcome to St. Matthias Catholic Church",
    subtitle: "Rooted in faith, growing in love.",
  },
  {
    image: "/images/slide2.jpg",
    title: "Join Us for Sunday Mass",
    subtitle: "Every Sunday | 7AM, 9AM & 11AM",
  },
  {
    image: "/images/slide3.jpg",
    title: "Youth Fellowship",
    subtitle: "Last Friday of the Month | 5PM",
  },
];

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 45vh;
  overflow: hidden;

  @media ${device.tablet} {
    height: 60vh;
  }
  @media ${device.desktop} {
    height: 88vh;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const SlideTitle = styled(motion.h2)`
  font-size: var(--f-lg);
  font-weight: bold;

  @media ${device.tablet} {
    font-size: 3rem;
    max-width: 600px;
  }
`;

const SlideSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  margin-top: 1rem;
  font-style: italic;
  color: var(--color-grey-300);

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: white;
  color: black;
  padding: 0.6rem 1rem;
  border: none;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #f1f1f1;
  }
`;

export default function ChurchSlider() {
  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000); // Change slide every 8s
    return () => clearInterval(interval);
  }, []);

  return (
    <SliderWrapper>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          style={{ position: "absolute", inset: 0 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <SlideImage src={slides[index].image} alt={slides[index].title} />
          <Overlay>
            <SlideTitle
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slides[index].title}
            </SlideTitle>
            <SlideSubtitle
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {slides[index].subtitle.split("|")[0]}

              <motion.span
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{ display: "inline-block" }}
              >
                {slides[index].subtitle.split("|")[1] ? ` |` : ""}&nbsp;
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                style={{ display: "inline-block" }}
              >
                {slides[index].subtitle.split("|")[1]
                  ? `${slides[index].subtitle.split("|")[1]}`
                  : ""}
              </motion.span>
            </SlideSubtitle>
          </Overlay>
        </motion.div>
      </AnimatePresence>

      {/* Optional: Manual control */}
      {/* <NextButton
        onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
      >
        Next
      </NextButton> */}
    </SliderWrapper>
  );
}
