"use client";

import React from "react";
import styles from "@/styles/components/Skills.module.scss";
import { skillsData } from "@/db/main";
import { Variants, motion } from "framer-motion";
import Skill from "./Skill";

const containerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Skills: React.FC = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.skills_title}>{skillsData.title}</h2>
      <div className={styles.skills_container}>
        {skillsData.categories.map((category, i) => (
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className={styles.skills_container_category}
            key={i}
          >
            <h3 className={styles.skills_container_category_title}>
              {category.title}
            </h3>
            <div className={styles.skills_container_category_skillsContainer}>
              {category.skills.map((skill, j) => (
                <Skill key={j} title={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
