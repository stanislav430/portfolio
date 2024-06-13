"use client";

import React, { useEffect } from "react";
import { Variants, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
import { useRecoilState, useRecoilValue } from "recoil";
import useSound from "use-sound";
import { navState } from "@/atoms/NavAtom";
import { soundState } from "@/atoms/SoundAtom";
import styles from "@/styles/components/Navbar.module.scss";
import ThemeToggler from "./ThemeToggler";

type RightProps = {
  mobile: boolean;
};

const listVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const Right: React.FC<RightProps> = ({ mobile }) => {
  const [navStateValue, setNavState] = useRecoilState(navState);
  const { soundActive } = useRecoilValue(soundState);
  const [playClick] = useSound("/sounds/box-click.wav", { volume: 0.5 });

  //stop scrolling
  useEffect(() => {
    window.addEventListener("scroll", stopScroll);

    return () => {
      window.removeEventListener("scroll", stopScroll);
    };
  }, [navStateValue.open, mobile]);

  const stopScroll = () => {
    if (mobile && navStateValue.open) {
      window.scrollTo(0, 0);
    }
  };

  const handleClickLink = () => {
    handlePlayClick();
    setNavState((prev) => ({ ...prev, open: false }));
  };

  const handlePlayClick = () => {
    if (soundActive) {
      playClick();
    }
  };

  return (
    <>
      <motion.ul
        variants={listVariants}
        animate={!navStateValue.open && mobile ? "initial" : "animate"}
        className={styles.navbar_right_list}
      >
        <motion.li
          variants={itemVariants}
          className={styles.navbar_right_list_item}
        >
          <Link
            onClick={handleClickLink}
            to="about"
            smooth={true}
            duration={600}
            offset={50}
            aria-label="about"
          >
            About
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={styles.navbar_right_list_item}
        >
          <Link
            onClick={handleClickLink}
            to="skills"
            smooth={true}
            duration={600}
            offset={50}
            aria-label="skills"
          >
            Skills
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={styles.navbar_right_list_item}
        >
          <Link
            onClick={handleClickLink}
            to="projects"
            smooth={true}
            duration={600}
            offset={50}
            aria-label="projects"
          >
            Projects
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={styles.navbar_right_list_item}
        >
          <Link
            onClick={handleClickLink}
            to="contact"
            smooth={true}
            duration={600}
            offset={50}
            aria-label="contact"
          >
            Contact
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={styles.navbar_right_list_item}
        >
          <Link
            onClick={handleClickLink}
            to="link"
            smooth={true}
            duration={600}
            offset={50}
            aria-label="resume"
          >
            Resume
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={styles.navbar_right_list_item}
        >
          <ThemeToggler />
        </motion.li>
      </motion.ul>
      {mobile && (
        <div className={styles.navbar_right_links}>
          <div className={styles.navbar_right_links_line}></div>
          <div className={styles.navbar_right_links_container}>
            <a
              className={styles.navbar_right_links_container_link}
              href="https://github.com/stanislav430"
              target="_blank"
              aria-label="github"
              onClick={handlePlayClick}
            >
              <Icon icon="mdi:github" />
            </a>
            <a
              className={styles.navbar_right_links_container_link}
              href="https://www.linkedin.com/in/stanislav-danyliuk-stas/"
              target="_blank"
              aria-label="linkedin"
              onClick={handlePlayClick}
            >
              <Icon icon="mdi:linkedin" />
            </a>
            <a
              className={styles.navbar_right_links_container_link}
              href="mailto:danyliukstas1@gmail.com"
              target="_blank"
              aria-label="email"
              onClick={handlePlayClick}
            >
              <Icon icon="mi:email" />
            </a>
          </div>
          <div className={styles.navbar_right_links_line}></div>
        </div>
      )}
    </>
  );
};

export default Right;
