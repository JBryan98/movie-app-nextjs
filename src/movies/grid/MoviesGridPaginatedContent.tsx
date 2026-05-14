import { PageGridItem } from "@/components/page-grid/PageGridItem.type";
import PageGridPaginated from "@/components/page-grid/PageGridPaginated";
import { PaginatedResponse } from "@/types/ApiResponse.type";
import { MovieResult } from "@/types/Movie.type";
import { Alert } from "@mui/material";

interface Props {
  filters: Record<string, string>;
  service: (
    filters: Record<string, string>,
  ) => Promise<PaginatedResponse<MovieResult>>;
}

const MoviesGridPaginatedContent = async ({ service, filters }: Props) => {
  if (
    filters.page &&
    (isNaN(+filters.page) || +filters.page < 1 || +filters.page > 500)
  ) {
    return (
      <Alert severity="error">
        La página especificada no es válida. Solo estan permitidos valores entre
        1 y 500 para el parámetro page.
      </Alert>
    );
  }
  const discoverMoviesData = await service(filters);

  if (discoverMoviesData.results.length === 0) {
    return <Alert severity="info">No se encontraron películas.</Alert>;
  }

  const pageGridItems: PageGridItem[] = discoverMoviesData.results.map(
    (movie) => ({
      id: movie.id,
      title: movie.title,
      posterPath: movie.poster_path,
      overview: movie.overview,
      href: `/movies/${movie.id}`,
      rating: movie.vote_average,
    }),
  );

  return (
    <PageGridPaginated
      items={pageGridItems}
      currentPage={discoverMoviesData.page}
      totalPages={discoverMoviesData.total_pages}
    />
  );
};

export default MoviesGridPaginatedContent;
