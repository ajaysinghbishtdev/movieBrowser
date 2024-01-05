export interface IMovie {
  id: number;
  title: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
  poster_path: string;
  backdrop_path: string;
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
