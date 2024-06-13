"use client";
import React from "react";
import { soundState } from "@/atoms/SoundAtom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useRecoilValue } from "recoil";
import useSound from "use-sound";

import styles from "@/styles/components/Footer.module.scss";

const arrowVariants = {
  start: {
    y: 0,
  },
  end: {
    y: [-5, 5, -5],
    transition: {
      y: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  },
};

const Footer: React.FC = () => {
  const { soundActive } = useRecoilValue(soundState);
  const [playClick] = useSound("/sounds/box-click.wav", { volume: 0.5 });

  const handlePlaySound = () => {
    if (soundActive) {
      playClick();
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer_scroll}>
        <Link
          onClick={handlePlaySound}
          to="hero"
          href="hero"
          aria-label="hero"
          smooth={true}
          duration={600}
          offset={-100}
        >
          <motion.div
            variants={arrowVariants}
            initial="start"
            animate="end"
            className={styles.footer_scroll_arrow}
          >
            <Icon
              className={styles.footer_scroll_arrow_svg}
              icon="ph:caret-double-up-thin"
            />
          </motion.div>
        </Link>
      </div>
      <div className={styles.footer_textContainer}>
        <Icon icon="uiw:copyright" />
        <p>2024-present Stanislav Danyliuk. All Rights Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
