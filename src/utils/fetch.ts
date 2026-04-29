import { CONFIG } from "@/constants/config";
import { notFound } from "next/navigation";

export const get = async <T>(
  pathname: string,
  filter?: Record<string, any>,
): Promise<T> => {
  try {
    const url = getFetchUrl(pathname);
    handleFilters(url, filter);
    const response = await fetch(url.toString());
    const data = await response.json();
    if (!response.ok) {
      throw data;
    }
    return data;
  } catch (error: any) {
    console.error("error", error);
    throw new Error(error.message || "Hubo un error al obtener los datos");
  }
};

const getFetchUrl = (pathname: string): URL => {
  const isServerSide = typeof window === "undefined";
  const baseUrl = isServerSide
    ? process.env.TMDB_BASE_URL!
    : process.env.NEXT_PUBLIC_TMDB_BASE_URL!;

  const apiKey = isServerSide
    ? process.env.TMDB_API_KEY!
    : process.env.NEXT_PUBLIC_TMDB_API_KEY!;

  const url = new URL(`${baseUrl}${pathname}`);

  url.searchParams.set("api_key", apiKey);
  url.searchParams.set("language", "es-MX");
  return url;
};

const handleFilters = (url: URL, filter?: Record<string, any>) => {
  if (!filter) return;
  if (filter.page && filter.page > CONFIG.MAX_PAGE) {
    throw new Error(
      "La página solicitada excede el límite permitido por la API",
    );
  }
  Object.entries(filter).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value));
    }
  });
};
