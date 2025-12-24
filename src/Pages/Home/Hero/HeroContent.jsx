"use client";
import React from "react";
import { motion } from "motion/react";
import { FlipWords } from "../../../Constants/FlipWords";

const HeroContent = () => {
  const words = ["Skills", "Passion", "Creativity"];
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="mt-20 md:pt-0">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold md:leading-12 text-white"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        Build <br />
        <motion.span
          className="text-6xl"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 0.9, duration: 0.9 }}
        >
          <FlipWords
            words={words}
            className="font-bold text-5xl md:text-7xl text-pink-700"
          />
        </motion.span>
        <br />
        With Online Course For Education
      </motion.h1>

      <motion.p
        className="mt-6 text-sm md:text-base text-white opacity-60"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        quas, harum sit excepturi recusandae odit rem vel voluptas magni debitis
        omnis dolor voluptatum officia nostrum laudantium quibusdam sed minima
        accusamus!
      </motion.p>

      <motion.div
        className="mt-8 flex items-center space-x-4"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 1.1, duration: 1 }}
      >
        <button className="button_cls bg-green-700 hover:bg-green-900">
          Get Started
        </button>
        <button className="button_cls bg-yellow-700 hover:bg-yellow-900">
          Join Now
        </button>
      </motion.div>
    </div>
  );
};

export default HeroContent;
