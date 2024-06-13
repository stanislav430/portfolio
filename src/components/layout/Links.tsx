"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import styles from "@/styles/layout/MainLayout.module.scss";

const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {},
  },
  jump: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 200,
      dumping: 8,
    },
  },
};
const lineVariants = {
  hidden: {
    opacity: 0,
    height: "0",
  },
  visible: {
    opacity: 1,
    height: "15rem",
    transition: {},
  },
};

const Links: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.links}
    >
      <motion.a
        variants={childVariants}
        className={styles.links_link}
        href="mailto:danyliukstas1@gmail.com"
        target="_blank"
        aria-label="email"
      >
        <Icon className={styles.links_link_icon} icon="mi:email" />
      </motion.a>
      <motion.a
        variants={childVariants}
        className={styles.links_link}
        href="https://www.linkedin.com/in/stanislav-danyliuk-stas/"
        target="_blank"
        aria-label="linkedin"
      >
        <Icon className={styles.links_link_icon} icon="mdi:linkedin" />
      </motion.a>
      <motion.a
        variants={childVariants}
        className={styles.links_link}
        href="https://github.com/stanislav430"
        target="_blank"
        aria-label="github"
      >
        <Icon className={styles.links_link_icon} icon="mdi:github" />
      </motion.a>
      <motion.div variants={lineVariants} className={styles.links_line} />
    </motion.div>
  );
};

export default Links;
