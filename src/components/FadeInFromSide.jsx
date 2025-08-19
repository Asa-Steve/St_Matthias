import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInFromSide = ({ side = "right", children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" }); // was margin of -100px

  const isRight = side === "right";
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isRight ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {typeof children === "function" ? children({ isInView }) : children}
    </motion.div>
  );
};

export default FadeInFromSide;
