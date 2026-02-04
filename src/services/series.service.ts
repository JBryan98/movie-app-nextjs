import { PaginatedResponse } from "@/types/ApiResponse.type";
import { SerieDetails, SerieResult } from "@/types/Serie.type";
import { get } from "@/utils/fetch";

export const getDiscoverSeries = async (filters: Record<string, string>): Promise<PaginatedResponse<SerieResult>> => {
    const response = await get<PaginatedResponse<SerieResult>>("/discover/tv", filters);
    return response;
}

export const getSerieDetails = async (serieId: number): Promise<SerieDetails> => {
    const response = await get<SerieDetails>(`/tv/${serieId}`, {append_to_response: "videos,images,credits,reviews,recommendations"});
    return response;
}

export const searchSeries = async (filters: Record<string, string>): Promise<PaginatedResponse<SerieResult>> => {
    "use server";
    const response = await get<PaginatedResponse<SerieResult>>("/search/tv", filters);
    return response;
}