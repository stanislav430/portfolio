"use client";

import React from "react";
import { Variants, motion } from "framer-motion";
import { aboutData } from "@/db/main";
import styles from "@/styles/components/About.module.scss";

const containerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const childrenVariants: Variants = {
  initial: {
    opacity: 0,
    x: "-50%",
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};
const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.about_title}>{aboutData.title}</h2>
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className={styles.about_container}
      >
        {aboutData.cards.map((card, i) => (
          <motion.div
            variants={childrenVariants}
            key={i}
            className={styles.about_container_card}
          >
            <h3 className={styles.about_container_card_title}>{card.title}</h3>
            <p className={styles.about_container_card_text}>{card.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default About;
