"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import styles from "@/styles/components/Navbar.module.scss";

const ThemeToggler: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={styles.navbar_right_list_item_toggler}>
      <div
        className={styles.navbar_right_list_item_toggler_theme}
        onClick={handleToggleTheme}
      >
        <Icon icon={theme === "light" ? "ph:sun-fill" : "ion:moon"} />
      </div>
      <div className={styles.navbar_right_list_item_toggler_sound}>
        <Icon icon="fluent:speaker-2-16-filled" />
      </div>
    </div>
  );
};
export default ThemeToggler;
