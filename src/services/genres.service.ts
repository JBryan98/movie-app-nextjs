import { GenreList } from "@/types/Genre";
import { get } from "@/utils/fetch";

export const getMovieListGenres = async (): Promise<GenreList> => {
  const response = await get<GenreList>("/genre/movie/list");
  return response;
};

export const getSeriesListGenres = async (): Promise<GenreList> => {
  const response = await get<GenreList>("/genre/tv/list");
  return response;
};
