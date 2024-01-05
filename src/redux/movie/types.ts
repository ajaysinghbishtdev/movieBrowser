export interface IMovie {
  id: number;
  title: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
  poster_path: string;
  backdrop_path: string;
}

export interface IMovieState {
  movie: IMovie | null;
}
