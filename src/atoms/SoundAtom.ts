import { atom } from "recoil";

interface SoundState {
  soundActive: boolean;
}
const defaultSoundState: SoundState = {
  soundActive: true,
};

export const soundState = atom({
  key: "soundState",
  default: defaultSoundState,
});
