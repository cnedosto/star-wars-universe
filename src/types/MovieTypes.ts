export type Movie = {
  title: string;
  producer: string;
  director: string;
  opening_crawl: string;
  episode_id: number;
};

export type MovieSlideProps = {
  movie: Movie;
  key: number;
  slideIndex: number;
};
