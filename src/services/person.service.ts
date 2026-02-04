import { PaginatedResponse } from "@/types/ApiResponse.type";
import { Person } from "@/types/Person.type";
import { get } from "@/utils/fetch";

export const searchperson = async (filters: Record<string, string>): Promise<PaginatedResponse<Person>>  => {
    const response = await get<PaginatedResponse<Person>>("/search/person", filters);
    return response;
}