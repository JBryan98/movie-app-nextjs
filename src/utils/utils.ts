import { ReadonlyURLSearchParams } from "next/navigation";

// Utils for handling image urls

export const isServerSide = () => typeof window === "undefined";

export const getPosterImageUrl = (
  path: string | null,
  width: number | undefined,
): string => {
  if (path == null) {
    return "/imagen_no_disponible.png";
  }
  const baseUrl = isServerSide()
    ? process.env.TMDB_IMAGE_BASE_URL
    : process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;
  return width ? `${baseUrl}/w${width}${path}` : `${baseUrl}${path}`;
};

export const getBackdropImageUrl = (path: string): string => {
  const baseUrl = isServerSide()
    ? process.env.TMDB_IMAGE_BASE_URL
    : process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;
  return `${baseUrl}/original/${path}`;
};

export const getCastImageUrl = (
  profilePath: string | null,
  width: number | undefined,
  gender: number,
): string => {
  if (profilePath == null) {
    return gender === 1
      ? "/woman_profile_placeholder.jpg"
      : "/man_profile_placeholder.jpg";
  }
  const baseUrl = isServerSide()
    ? process.env.TMDB_IMAGE_BASE_URL
    : process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL;
  return `${baseUrl}/w${width}/${profilePath}`;
};

export const getAvatarImgUrl = (avatarPath: string): string => {
  return `${isServerSide() ? process.env.TMDB_MEDIA_BASE_URL : process.env.NEXT_PUBLIC_TMDB_MEDIA_BASE_URL}/w45_and_h45_face${avatarPath}`;
};

//////////////////////////////////////////////////////////////////////////////

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
): string => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
  return `${pathname}${queryString}`;
};

export const formatScore = (voteAverage: number): string => {
  if (voteAverage === 0) {
    return "NR";
  }
  return voteAverage.toFixed(1);
};

export const formatScoreWithMax = (voteAverage: number): string => {
  if (voteAverage === 0) {
    return "Sin puntuación";
  }
  return `${voteAverage.toFixed(1)}/10`;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};
