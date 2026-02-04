import { PaginatedResponse } from "./ApiResponse.type";
import { Genre, GenreList } from "./Genre";
import { Credit, Review, Video } from "./Movie.type";

export type SerieResult = {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
};

export type SerieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  created_by: Creator[];
  credits: Credit;
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Episode;
  name: string;
  next_episode_to_air: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: Network[];
  recommendations: PaginatedResponse<SerieResult>;
  reviews: PaginatedResponse<Review>;
  seasons: Season[];
  similar: PaginatedResponse<SerieResult>;
  spoken_languages: Language[];
  status: string;
  tagline: string;
  type: string;
  videos: {
    results: Video[];
  };
    vote_average: number;
  vote_count: number;
};

type Creator = {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string | null;
};

type Episode = {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
};

type Network = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type Season = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
};

type Language = {};
