"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import styles from "@/styles/layout/MainLayout.module.scss";

const Cursor: React.FC = () => {
  const [isClicked, setIsClicked] = useState<Boolean>(false);
  const [show, setShow] = useState<Boolean>(false);
  const cursorX = useMotionValue<Number>(0);
  const cursorY = useMotionValue<Number>(0);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  //inner circle get bigger while mouse down
  const handleMouseDown = () => {
    setIsClicked(true);
  };
  const handleMouseUp = () => {
    setIsClicked(false);
  };
  //hide the cursor when the mouse out of the screen
  const handleMouseEnter = () => {
    setShow(true);
  };
  const handleMouseLeave = () => {
    setShow(false);
  };
  // custom cursor movement
  const handleMouseMove = (event: MouseEvent) => {
    if (!cursorRef.current) return;
    cursorX.set(event.clientX - cursorRef.current.clientWidth / 2);
    cursorY.set(event.clientY - cursorRef.current.clientHeight / 2);
  };

  return (
    <motion.div
      className={styles.cursor}
      ref={cursorRef}
      style={{
        x: cursorX,
        y: cursorY,
        opacity: show ? "1" : "0",
      }}
    >
      <motion.div
        style={{
          width: isClicked ? "2.5rem" : "0.7rem",
          height: isClicked ? "2.5rem" : "0.7rem",
          transition: "width 0.2s, height 0.2s",
        }}
        className={styles.cursor_inner}
      />
    </motion.div>
  );
};

export default Cursor;
