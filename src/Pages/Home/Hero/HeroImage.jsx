import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "motion/react";

const HeroImage = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Tilt>
      <motion.div
        className=""
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 1.1, duration: 1 }}
      >
        <img className="w-[800] h-[600]" src="/images/hero.png" alt="" />
      </motion.div>
    </Tilt>
  );
};

export default HeroImage;
