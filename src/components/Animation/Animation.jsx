import { motion } from "framer-motion";

const Animation = ({ children, delay = 0 }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        initial={{
          y: "120%",
          x: "-20%",
        }}
        animate={{
          y: 0,
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Animation;
