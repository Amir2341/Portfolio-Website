import { motion } from "framer-motion";

const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

type AnimatedPageProps = {
  children: React.ReactNode;
};

const AnimatedPage = (props: AnimatedPageProps) => {
  return (
    <motion.div
      variants={animation}
      initial="animate"
      animate="animate"
      exit="exit"
      transition={{ duration: 1.5 }}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimatedPage;
