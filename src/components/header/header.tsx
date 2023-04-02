import { FC } from "react";
import "./header.css";
import HeaderSocials from "./headersocials";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedPage from "../animate/animatepage";
import ParticleBackground from "../partciles/particles";

const Header: FC = () => {
  return (
    <AnimatedPage>
      <ParticleBackground />
      <header>
        <div className="container header__container">
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            Hello I'm
          </motion.h5>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
          >
            Amir Rafiq
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5 }}
            className="text-light"
          >
            Software Developer
          </motion.h5>
          <HeaderSocials />

          <Link to="/contact" className="scroll__down">
            Scroll Down
          </Link>
        </div>
      </header>
    </AnimatedPage>
  );
};
export default Header;
