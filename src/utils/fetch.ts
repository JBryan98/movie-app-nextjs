export const get = async <T>(
  pathname: string,
  filter?: Record<string, any>,
): Promise<T> => {
  const url = getFetchUrl(pathname);
  if (filter) {
    Object.entries(filter).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }
  const response = await fetch(url.toString());
  if (!response.ok) {
    console.log("error", response);
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
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
