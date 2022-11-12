export type Movie = {
  title: string;
  producer: string;
  director: string;
  opening_crawl: string;
  episode_id: number;
  characters: Array<string>;
};

export type MovieSlideProps = {
  movie: Movie;
  key: number;
  slideIndex: number;
  charsData: Array<any> | null;
};
