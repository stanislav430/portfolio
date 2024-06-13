"use client";

import React from "react";
import { soundState } from "@/atoms/SoundAtom";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import useSound from "use-sound";
import styles from "@/styles/components/Skills.module.scss";

type SkillProps = { title: string };

const Skill: React.FC<SkillProps> = ({ title }) => {
  const { soundActive } = useRecoilValue(soundState);
  const [playPop] = useSound("/sounds/pop.mp3", { volume: 0.3 });

  const handlePlay = () => {
    if (soundActive) {
      playPop();
    }
  };

  return (
    <motion.div
      whileHover={{
        boxShadow: "0.8rem 0.8rem 0px var(--card-text)",
        transform: "translate(-0.8rem, -0.8rem)",
      }}
      onHoverStart={handlePlay}
      className={styles.skills_container_category_skillsContainer_skill}
    >
      {title}
    </motion.div>
  );
};
export default Skill;
