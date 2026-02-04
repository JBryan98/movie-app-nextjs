import { PageGridItem } from "@/components/page-grid/PageGridItem.type";
import PageGridPaginated from "@/components/page-grid/PageGridPaginated";
import { PaginatedResponse } from "@/types/ApiResponse.type";
import { MovieResult } from "@/types/Movie.type";

interface Props {
  filters: Record<string, string>;
  service: (
    filters: Record<string, string>,
  ) => Promise<PaginatedResponse<MovieResult>>;
}

const MoviesGridPaginatedContent = async ({ service, filters }: Props) => {
  const discoverMoviesData = await service(filters);

  const pageGridItems: PageGridItem[] = discoverMoviesData.results.map(
    (movie) => ({
      id: movie.id,
      title: movie.title,
      posterPath: movie.poster_path,
      overview: movie.overview,
      href: `/movies/${movie.id}`,
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
