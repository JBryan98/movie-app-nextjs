import { PaginatedResponse } from "@/types/ApiResponse.type";
import { Movie, MovieResult } from "@/types/Movie.type";
import { get } from "@/utils/fetch";

export const getMovieDetails = async (id: number): Promise<Movie> => {
    const response = await get<Movie>(`/movie/${id}`, {append_to_response: "videos,images,credits,reviews,recommendations"});
    return response;
}

export const getDiscoverMovies = async (filters: Record<string, string>): Promise<PaginatedResponse<MovieResult>> => {
    const response = await get<PaginatedResponse<MovieResult>>("/discover/movie", filters);
    return response;
}

export const searchMovies = async (filters: Record<string, string>): Promise<PaginatedResponse<MovieResult>> => {
    "use server";
    const response = await get<PaginatedResponse<MovieResult>>("/search/movie", filters);
    return response;
}