type MovieInfo = {
  title: string;
};

type MovieProps = {
  movie: MovieInfo;
};

export const MovieCard = ({ movie }: MovieProps) => {
  return (
    <div className="flex justify-center h-60 p-4 bg-white dark:bg-black">
      <h3>{movie.title}</h3>
    </div>
  );
};
