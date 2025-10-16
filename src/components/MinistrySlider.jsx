import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styled from "styled-components";

import { device } from "@/helpers/mediaQueries";
import BlobImage from "./BlobImage";
import TagLine from "./TagLine";

const SliderWrapper = styled(motion.div)`
  padding: 1rem;
  position: relative;
  min-height: 300px;
  max-height: 80vh;
  overflow: hidden;
  height: 100%;
  color: var(--color-grey-0);
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;
  align-items: center;

  @media ${device.tablet} {
    height: 85vh;
  }
  @media ${device.desktop} {
    flex-direction: row;
    justify-content: center;
    padding: 0 2rem;
    min-height: 90vh;
    max-height: 100vh;
  }
`;

const LeftContent = styled.div`
  flex: 1 1 400px;
  height: 50%;
  max-width: 500px;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-block: 0 1rem;
  }

  a {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--color-secondary);
    color: var(--color-grey-0);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: transparent;
      outline: 2px solid var(--color-grey-0);
    }
  }

  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;

    text-shadow: 2px 2px 4px var(--text-shadow);

    h2 {
      font-size: var(--f-lg);
    }

    a {
      width: fit-content;
      max-width: 200px;
    }
  }
`;

const RightContent = styled.div`
  flex: 0 1 500px;

  display: flex;
  height: 50%;

  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    flex: 0;
    width: 600px;
  }
  @media ${device.desktop} {
    height: 100%;
    flex: 0 1 700px;
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  padding-inline: 1rem;
  position: absolute;
  bottom: 10px;
  right: 0;

  button {
    color: var(--color-grey-0);
    background-color: var(--color-secondary);
    border: none;
    height: 30px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;

    &:hover {
      background-color: transparent;
      outline: 2px solid var(--color-grey-0);
    }
  }
`;

const ministrySlides = [
  {
    title: "Our Ministry",
    description:
      "Serve Christ and the Church through our ministries—choir, catechism, outreach, and more. Find your calling and be part of our mission.",
    image: "/images/rosary.jpg",
    page: "/ministries",
    btnText: "Explore Ministries",
  },
  {
    title: "Weekly Programs",
    description:
      "Join us for daily and Sunday Mass, Adoration, Bible study, and parish activities to deepen your faith.",
    image: "/images/weekly.jpg",
    page: "/programs",
    btnText: "View Schedule",
  },
];

export default function MinistrySlider() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  //   Auto-slide every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIndex((prev) => (prev + 1) % ministrySlides.length);

    // Lock for 700ms to match transition duration
    setTimeout(() => setIsAnimating(false), 700);
  };
  const prevSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIndex(
      (prev) => (prev - 1 + ministrySlides.length) % ministrySlides.length
    );
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <SliderWrapper
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <LeftContent>
            <TagLine
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Join the Mission
            </TagLine>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {ministrySlides[index].title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {ministrySlides[index].description}
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              href={ministrySlides[index].page ?? "/"}
            >
              {ministrySlides[index].btnText ?? "View Details"}
            </motion.a>
          </LeftContent>

          <RightContent
            as={motion.div}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <BlobImage src={ministrySlides[index].image} />
          </RightContent>
        </SliderWrapper>
      </AnimatePresence>

      <NavButtons>
        <button onClick={prevSlide}>
          <MdArrowBackIos />
        </button>
        <button onClick={nextSlide}>
          <MdArrowForwardIos />
        </button>
      </NavButtons>
    </>
  );
}
