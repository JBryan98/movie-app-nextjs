"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { PaginatedResponse } from "@/types/ApiResponse.type";
import { MovieResult } from "@/types/Movie.type";
import { Person } from "@/types/Person.type";
import { SerieResult } from "@/types/Serie.type";
import { SyntheticEvent, useEffect, useState } from "react";
import AsyncSearchTextfield from "./AsyncSearchTextfield";
import { SearchOption } from "./SearchOption.type";

interface Props<T> {
  placeholder?: string;
  type: "movies" | "series" | "person";
  searchService: (
    filters: Record<string, string>,
  ) => Promise<PaginatedResponse<T>>;
}

const Search = <T,>({ searchService, type, placeholder }: Props<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<SearchOption[]>([]);
  const debouncedSearch = useDebounce<string>(search, 500);

  useEffect(() => {
    if (debouncedSearch.length > 1) {
      setIsLoading(true);
      searchService({ query: debouncedSearch })
        .then((res) => handleData(res.results))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [debouncedSearch]);

  const handleData = (response: T[]) => {
    if (response.length === 0) {
      return setData([getNoResultsOption()]);
    }
    const options = mapDataToOptions(response);
    if (options.length <= 5) {
      return setData(options);
    }
    setData([...options.slice(0, 5), getViewAllOption()]);
  };

  const getNoResultsOption = (): SearchOption => ({
    id: "__no_results_option__",
    title: `No se encontraron resultados para "${search}"`,
    type: "no_results",
  });

  const getViewAllOption = (): SearchOption => ({
    id: "__view_all_option__",
    title: `Ver todos los resultados para "${search}"`,
    href: `/${type}/search/${search}`,
    type: "view_all",
  });

  const mapDataToOptions = (data: T[]): SearchOption[] => {
    if (type === "movies") {
      return (data as MovieResult[]).map((movie) => ({
        id: movie.id,
        title: movie.title,
        href: `/movies/${movie.id}`,
        imagePath: movie.poster_path,
      }));
    } else if (type === "series") {
      return (data as SerieResult[]).map((serie) => ({
        id: serie.id,
        title: serie.name,
        href: `/series/${serie.id}`,
        imagePath: serie.poster_path,
      }));
    } else {
      return (data as Person[]).map((person) => ({
        id: person.id,
        title: person.name,
        href: `/person/${person.id}`,
        imagePath: person.profile_path,
      }));
    }
  };

  const getOptionLabel = (option: string | SearchOption) => {
    if (typeof option === "string") {
      return option;
    } else if (option && typeof option === "object") {
      return option.title;
    } else {
      throw new Error("Invalid option");
    }
  };

  const onInputChange = (
    event: SyntheticEvent<Element, Event>,
    newInputValue: string,
  ) => {
    if (newInputValue === "") {
      setData([]);
    }
    setSearch(newInputValue);
  };

  return (
    <AsyncSearchTextfield
      data={data}
      searchTerm={search}
      isLoading={isLoading}
      onInputChange={onInputChange}
      getOptionLabel={getOptionLabel}
      placeholder={placeholder}
    />
  );
};

export default Search;
