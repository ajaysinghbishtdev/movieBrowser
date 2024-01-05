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
}

export interface IMovieCategoryList {
  nowPlaying: IMovie[] | null;
  popular: IMovie[] | null;
  topRated: IMovie[] | null;
  upcoming: IMovie[] | null;
}

export interface IDashboardState {
  loading: boolean;
  error: any | null;
  movieCategoryList: IMovieCategoryList;
}
