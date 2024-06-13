"use client";

import React from "react";
import { Variants, motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import useSound from "use-sound";
import { soundState } from "@/atoms/SoundAtom";
import styles from "@/styles/components/Skills.module.scss";

type SkillProps = { title: string };

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

const Skill: React.FC<SkillProps> = ({ title }) => {
  const { soundActive } = useRecoilValue(soundState);
  const [playPop] = useSound("/sounds/pop.mp3", { volume: 0.2 });

  const handlePlay = () => {
    if (soundActive) {
      playPop();
    }
  };

  return (
    <motion.div
      variants={childrenVariants}
      whileHover={{
        scale: 1.08,
      }}
      onHoverStart={handlePlay}
      className={styles.skills_container_category_skillsContainer_skill}
    >
      {title}
    </motion.div>
  );
};
export default Skill;
