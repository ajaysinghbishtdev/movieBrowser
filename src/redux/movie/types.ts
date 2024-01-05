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

export interface IMovieListResponse {
  results: IMovie[];
  page: number;
  total_pages: number;
}

export interface IMovieState {
  loading: boolean;
  paginationLoading: boolean;
  error: any | null;
  movieListType: TMovieListType | null;
  movie: IMovie | null;
  nowPlayingMovieList: IMovie[] | null;
  popularMovieList: IMovie[] | null;
  topRatedMovieList: IMovie[] | null;
  upcomingMovieList: IMovie[] | null;
  page: number;
  total_pages: number;
}
