import useDarkMode from "../../hooks/useDarkMode";
import EpisodeIDark from "../../assets/images/backgrounds/episode_i_dark.png";
import EpisodeILight from "../../assets/images/backgrounds/episode_i_light.jpeg";
import EpisodeIIDark from "../../assets/images/backgrounds/episode_ii_dark.webp";
import EpisodeIILight from "../../assets/images/backgrounds/episode_ii_light.webp";
import EpisodeIIIDark from "../../assets/images/backgrounds/episode_iii_dark.webp";
import EpisodeIIILight from "../../assets/images/backgrounds/episode_iii_light.jpeg";
import EpisodeIVDark from "../../assets/images/backgrounds/episode_iv_dark.jpeg";
import EpisodeIVLight from "../../assets/images/backgrounds/episode_iv_light.webp";
import EpisodeVDark from "../../assets/images/backgrounds/episode_v_dark.png";
import EpisodeVLight from "../../assets/images/backgrounds/episode_v_light.webp";
import EpisodeVIDark from "../../assets/images/backgrounds/episode_vi_dark.webp";
import EpisodeVILight from "../../assets/images/backgrounds/episode_vi_light.jpeg";
import { MovieSlideProps } from "../../types/MovieTypes";

export const MovieSlide = ({ movie, key, slideIndex }: MovieSlideProps) => {
  const { title, producer, director, opening_crawl } = movie;
  const { isDarkMode } = useDarkMode();
  const handleImageToShow = (i: number) => {
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
  return (
    <div
      style={{ backgroundImage: `url(${handleImageToShow(slideIndex)})` }}
      className="w-screen h-screen bg-center bg-cover flex items-end text-black dark:text-white"
      key={key}
    >
      <div className=" group h-1/3 grow bg-gradient-to-t from-white via-[#FFFFFFCC] to-transparent dark:from-black dark:via-[#000000CC]">
        <span className="text-4xl font-bold flex justify-center uppercase c-title-stroke">
          {title}
        </span>
        <div className="group-hover:-translate-y-[5%] h-full translate-y-full transition duration-500 ease-in-out p-8 bg-gradient-to-t from-white dark:from-black dark:to-transparent">
          <span className="flex flex-col items-center justify-center">
            Director : {director} - Producer : {producer}
          </span>
          <span className="mx-80 flex items-start py-4 text-base">
            {opening_crawl}
          </span>
        </div>
      </div>
    </div>
  );
};
