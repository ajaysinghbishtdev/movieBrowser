export type TMovieListType =
  | 'NOW_PLAYING'
  | 'POPULAR'
  | 'TOP_RATED'
  | 'UPCOMING';

export interface IMovie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
}

export interface IMovieState {
  movieListType: TMovieListType | null;
  movie: IMovie | null;
}
