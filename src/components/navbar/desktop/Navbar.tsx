"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/components/Navbar.module.scss";
import Right from "./Right";

const animationDuration = 1.5;
const circleVariants = {
  start: {
    width: 0,
    height: 0,
    display: "block",
  },
  end: {
    width: [0, 20, 20, 0, 0],
    height: [0, 20, 20, 0, 0],

    transition: {
      duration: animationDuration,
      times: [0, 0.2, 0.6, 0.6, 1],
      ease: "linear",
    },
  },
};
const lineVariants = {
  start: {
    width: 0,
    height: "0%",
    opacity: 1.5,
  },
  end: {
    width: ["0%", "0%", "100%", "100%", "0%"],
    height: ["0%", "0%", "0%", "105%", "0%"],
    opacity: [1, 1, 1, 0, 0],
    transition: {
      duration: animationDuration,
      times: [0, 0.2, 0.6, 0.999, 1],
      ease: "linear",
    },
  },
};
const clipVariants = {
  start: {
    clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
  },
  end: {
    clipPath: [
      "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ],

    transition: {
      duration: animationDuration,
      times: [0, 0.2, 0.65, 0.999, 1],
      ease: "linear",
    },
  },
};

const Navbar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleAnimationComplete = () => {
    if (!containerRef.current) return;

    const parent = containerRef.current.parentNode;

    while (containerRef.current.firstChild) {
      parent?.insertBefore(
        containerRef.current.firstChild,
        containerRef.current
      );
    }
    containerRef.current.remove();
  };

  return (
    <nav className={styles.navbar}>
      <motion.div
        variants={circleVariants}
        initial="start"
        animate="end"
        className={styles.circle}
      ></motion.div>
      <motion.div
        variants={lineVariants}
        initial="start"
        animate="end"
        className={styles.line}
      ></motion.div>
      <motion.div
        ref={containerRef}
        variants={clipVariants}
        initial="start"
        animate="end"
        className={styles.clip}
        onAnimationComplete={handleAnimationComplete}
      >
        <div className={styles.navbar_left}>
          <h1 className={styles.navbar_left_logo}>Stanislav Danyliuk</h1>
        </div>
        <div className={styles.navbar_right}>
          <Right />
        </div>
      </motion.div>
    </nav>
  );
};
export default Navbar;
