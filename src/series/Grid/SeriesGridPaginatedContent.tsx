import { PageGridItem } from "@/components/page-grid/PageGridItem.type";
import PageGridPaginated from "@/components/page-grid/PageGridPaginated";
import { PaginatedResponse } from "@/types/ApiResponse.type";
import { SerieResult } from "@/types/Serie.type";
import { Alert } from "@mui/material";

interface Props {
  filters: Record<string, string>;
  service: (
    filters: Record<string, string>,
  ) => Promise<PaginatedResponse<SerieResult>>;
}

const SeriesGridPaginatedContent = async ({ filters, service }: Props) => {
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

  const series = await service(filters);

  if (series.results.length === 0) {
    return <Alert severity="info">No se encontraron series.</Alert>;
  }

  const pageGridItems: PageGridItem[] = series.results.map((serie) => ({
    id: serie.id,
    title: serie.name,
    posterPath: serie.poster_path,
    overview: serie.overview,
    href: `/series/${serie.id}`,
    rating: serie.vote_average,
  }));

  return (
    <PageGridPaginated
      items={pageGridItems}
      totalPages={series.total_pages}
      currentPage={series.page}
    />
  );
};

export default SeriesGridPaginatedContent;
