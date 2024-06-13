"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import { useRecoilState } from "recoil";
import useSound from "use-sound";
import styles from "@/styles/components/Navbar.module.scss";
import { soundState } from "@/atoms/SoundAtom";

const ThemeToggler: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [soundStateValue, setSoundState] = useRecoilState(soundState);
  const [playSoundOn] = useSound("/sounds/sound-on.mp3", { volume: 0.2 });
  const [playSoundOff] = useSound("/sounds/sound-off.wav", { volume: 0.2 });
  const [playThemeSwitch] = useSound("/sounds/light-switch.mp3", {
    volume: 0.2,
  });

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (soundStateValue.soundActive) {
      playThemeSwitch();
    }
  };

  const handleToggleSound = () => {
    soundStateValue.soundActive ? playSoundOff() : playSoundOn();
    setSoundState((prev) => ({
      ...prev,
      soundActive: !prev.soundActive,
    }));
  };

  return (
    <div className={styles.navbar_right_list_item_toggler}>
      <div
        className={styles.navbar_right_list_item_toggler_theme}
        onClick={handleToggleTheme}
      >
        <Icon icon={theme === "light" ? "ph:sun-fill" : "ion:moon"} />
      </div>
      <div
        onClick={handleToggleSound}
        className={styles.navbar_right_list_item_toggler_sound}
      >
        <Icon
          icon={
            soundStateValue.soundActive
              ? "fluent:speaker-2-16-filled"
              : "fluent:speaker-0-16-filled"
          }
        />
      </div>
    </div>
  );
};
export default ThemeToggler;
