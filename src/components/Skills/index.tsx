import React from "react";
import styles from "@/styles/components/Skills.module.scss";
import { skillsData } from "@/db/main";
import Skill from "./Skill";

const Skills: React.FC = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.skills_title}>{skillsData.title}</h2>
      <div className={styles.skills_container}>
        {skillsData.categories.map((category, i) => (
          <div className={styles.skills_container_category} key={i}>
            <h3 className={styles.skills_container_category_title}>
              {category.title}
            </h3>
            <div className={styles.skills_container_category_skillsContainer}>
              {category.skills.map((skill, j) => (
                <Skill key={j} title={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
