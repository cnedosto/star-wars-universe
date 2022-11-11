import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../components/Loader/Loader";
import { fetchMovies } from "../../services/api/fetchMovies";
import { useState } from "react";
import { useWheel } from "@use-gesture/react";
import { Lethargy } from "lethargy";
import { MovieSlide } from "../../components/MovieSlide/MovieSlide";
import { Movie } from "../../types/MovieTypes";

const lethargy = new Lethargy();
const clamp = (value, min, max) => Math.max(Math.min(max, value), min);

export const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  const bind = useWheel(({ event, last, memo: wait = false }) => {
    if (!last) {
      const s = lethargy.check(event);
      if (s) {
        if (!wait) {
          setSlideIndex((i) => clamp(i - s, 0, data.length - 1));
          return true;
        }
      } else return false;
    } else {
      return false;
    }
  });

  const slideContainerStyle = {
    transition: "transform 700ms ease",
    transform: `translateX(${-slideIndex * 100}vw)`,
  };

  console.log("data : ", data);

  return (
    <div className="w-full h-full flex items-start overflow-hidden" {...bind()}>
      <div className="flex slider" style={slideContainerStyle}>
        {isLoading && <Loader />}
        {data &&
          data
            .sort((a: Movie, b: Movie) => a.episode_id - b.episode_id)
            .map((movie: Movie) => (
              <MovieSlide
                movie={movie}
                key={movie.episode_id}
                slideIndex={slideIndex}
              />
            ))}
      </div>
    </div>
  );
};
