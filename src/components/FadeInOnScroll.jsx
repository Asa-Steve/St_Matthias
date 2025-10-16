import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInOnScroll = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" }); // was margin of -100px

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {typeof children === "function" ? children({ isInView }) : children}
    </motion.div>
  );
};

export default FadeInOnScroll;
