import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import styled, { css } from "styled-components";
import { device } from "@/helpers/mediaQueries";
import { useIsMobile } from "@/helpers/useResize";
import FadeInOnScroll from "./FadeInOnScroll";

const TimelineRow = styled.div`
  display: flex;
  margin: 1.5rem 0;
  position: relative;
  min-height: 120px;
  justify-content: ${({ align }) =>
    align === "left" ? "flex-start" : "flex-end"};

  @media ${device.tablet} {
    margin: 0.5rem;
    min-height: unset;
  }
`;

const StyledMotionCard = styled(motion.div)`
  background: var(--color-secondary);
  color: var(--color-grey-0);
  border-radius: 5px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 100%;
  padding: 1rem;
  text-align: start;

  h3 {
    margin: 0 0 0.5rem 0;
    color: var(--color-primary);
  }

  p {
    font-weight: bold;
    margin: 0 0 0.5rem 0;
  }

  ul {
    padding-left: 1rem;
  }

  li {
    margin-bottom: 0.3rem;
    padding-bottom: 0.2rem;
    &:not(:last-child) {
      border-bottom: 1px solid var(--color-grey-800);
    }
  }

  @media ${device.tablet} {
    text-align: unset;
    width: 48%;
    padding: 1.25rem 1.5rem;

    ${({ align }) =>
      align === "left"
        ? css`
            margin-right: auto;
          `
        : css`
            margin-left: auto;
          `}

    h3 {
      font-size: var(--f-lg);
    }
    p {
      font-size: var(--f-md);
    }
  }
`;

const Line = styled.div`
  display: none;

  @media ${device.tablet} {
    display: inline;
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px;
    height: 100%;
    background: var(--color-primary);
    transform: translateX(-50%);
    z-index: 0;
  }
`;

const TimelineItem = ({ children, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const align = index % 2 === 0 ? "left" : "right";

  // Using x offset for desktop, y offset for mobile
  const isMobile = useIsMobile();
  const initial = !isMobile
    ? { opacity: 0, x: align === "left" ? -100 : 100 }
    : { opacity: 0, y: 30 };

  return (
    <TimelineRow align={align}>
      <Line />
      <StyledMotionCard
        ref={ref}
        align={align}
        initial={initial}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {children}
      </StyledMotionCard>
    </TimelineRow>
  );
};

export default TimelineItem;
