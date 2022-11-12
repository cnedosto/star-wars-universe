import useDarkMode from "../../hooks/useDarkMode";
import { MovieSlideProps } from "../../types/MovieTypes";
import {
  handleImageToShow,
  handlePosterToShow,
} from "../../utils/imageHandler";
import { toRomanNumber } from "../../utils/convertToRomanNumber";
import { excludeName, handleCharById } from "../../utils/characterHandler";

export const MovieSlide = ({
  movie,
  key,
  slideIndex,
  charsData,
}: MovieSlideProps) => {
  const { title, producer, director, opening_crawl, characters } = movie;
  const { isDarkMode } = useDarkMode();

  const backgroundImage = handleImageToShow(slideIndex, isDarkMode);
  const posterImage = handlePosterToShow(slideIndex);
  const charList = handleCharById(characters);

  return (
    <div
      key={key}
      className="h-screen w-screen flex flex-col text-black dark:text-white"
    >
      <div className=" flex flex-row relative">
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          className="bg-cover h-screen w-screen absolute -z-10 opacity-30"
        />
        <div className="py-12 pl-24 pr-12">
          <img src={posterImage} className="w-[70rem]" />
          <div className="bg-cyan-500 dark:bg-red-700 rounded-b-md p-4 text-base text-center" />
        </div>
        <div className="flex flex-col items-start pl-12 pr-24 py-12">
          <span className="text-5xl mb-12">
            Star Wars Episode {toRomanNumber(slideIndex)} : {title}
          </span>
          <div className="py-3 font-normal font-source">
            <span className="pr-2 font-source text-xl font-semibold">
              Director :
            </span>
            <span className="text-lg font-source tracking-wide">
              {director}
            </span>
          </div>
          <div className="py-3 font-normal font-source">
            <span className="pr-2 font-source text-xl font-semibold">
              Producer :
            </span>
            <span className="text-lg font-source tracking-wide">
              {producer}
            </span>
          </div>
          <div className="py-3 tracking-wide font-normal text-lg font-source leading-relaxed">
            {opening_crawl}
          </div>
          <div className="flex flex-wrap">
            {charsData
              ?.filter((c) =>
                charList.find((cl) => cl === c.id && !excludeName(c.name))
              )
              .map((char) => {
                return (
                  <div className="flex flex-col items-center p-4 w-36">
                    <img
                      src={char.image}
                      alt={char.name}
                      className="rounded-full h-12"
                    />
                    <span>{char.name}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
