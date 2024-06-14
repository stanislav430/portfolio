"use client";
import React from "react";
import styles from "@/styles/components/Projects.module.scss";
import { projectsData } from "@/db/main";
import Project from "./Project";

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.projects_title}>{projectsData.title}</h2>
      <div className={styles.projects_container}>
        {projectsData.Projects.map((project, i) => (
          <Project key={i} data={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
