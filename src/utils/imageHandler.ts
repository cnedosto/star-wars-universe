import EpisodeIDark from "../assets/images/backgrounds/episode_i_dark.png";
import EpisodeILight from "../assets/images/backgrounds/episode_i_light.jpeg";
import EpisodeIIDark from "../assets/images/backgrounds/episode_ii_dark.webp";
import EpisodeIILight from "../assets/images/backgrounds/episode_ii_light.webp";
import EpisodeIIIDark from "../assets/images/backgrounds/episode_iii_dark.webp";
import EpisodeIIILight from "../assets/images/backgrounds/episode_iii_light.jpeg";
import EpisodeIVDark from "../assets/images/backgrounds/episode_iv_dark.jpeg";
import EpisodeIVLight from "../assets/images/backgrounds/episode_iv_light.webp";
import EpisodeVDark from "../assets/images/backgrounds/episode_v_dark.png";
import EpisodeVLight from "../assets/images/backgrounds/episode_v_light.webp";
import EpisodeVIDark from "../assets/images/backgrounds/episode_vi_dark.webp";
import EpisodeVILight from "../assets/images/backgrounds/episode_vi_light.jpeg";
import EpisodeIPoster from "../assets/images/posters/episode_i.jpeg";
import EpisodeIIPoster from "../assets/images/posters/episode_ii.jpeg";
import EpisodeIIIPoster from "../assets/images/posters/episode_iii.jpeg";
import EpisodeIVPoster from "../assets/images/posters/episode_iv.jpeg";
import EpisodeVPoster from "../assets/images/posters/episode_v.jpeg";
import EpisodeVIPoster from "../assets/images/posters/episode_vi.jpeg";
import { ImageData, ImagesType } from "../types/ImagesType";

export const handleImageToShow = (i: number, isDarkMode: boolean) => {
  if (isDarkMode) {
    switch (i) {
      case 0:
        return EpisodeIDark;
      case 1:
        return EpisodeIIDark;
      case 2:
        return EpisodeIIIDark;
      case 3:
        return EpisodeIVDark;
      case 4:
        return EpisodeVDark;
      case 5:
        return EpisodeVIDark;
    }
  } else {
    switch (i) {
      case 0:
        return EpisodeILight;
      case 1:
        return EpisodeIILight;
      case 2:
        return EpisodeIIILight;
      case 3:
        return EpisodeIVLight;
      case 4:
        return EpisodeVLight;
      case 5:
        return EpisodeVILight;
    }
  }
};

export const handlePosterToShow = (i: number) => {
  switch (i) {
    case 0:
      return EpisodeIPoster;
    case 1:
      return EpisodeIIPoster;
    case 2:
      return EpisodeIIIPoster;
    case 3:
      return EpisodeIVPoster;
    case 4:
      return EpisodeVPoster;
    case 5:
      return EpisodeVIPoster;
  }
};

export const handleCharacterImage = (character: string, charList: any) => {
  const selectedChar = charList.find((c: ImageData) => c.name === character);
  return selectedChar.image;
};
