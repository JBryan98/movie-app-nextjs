import { PageGridItem } from "@/components/page-grid/PageGridItem.type";
import PageGridPaginated from "@/components/page-grid/PageGridPaginated";
import { PaginatedResponse } from "@/types/ApiResponse.type";
import { SerieResult } from "@/types/Serie.type";

interface Props {
  searchParams: Record<string, string>;
  service: (
    filters: Record<string, string>,
  ) => Promise<PaginatedResponse<SerieResult>>;
}

const SeriesGridPaginatedContent = async ({ searchParams, service }: Props) => {
  const series = await service(searchParams);

  const pageGridItems: PageGridItem[] = series.results.map((serie) => ({
    id: serie.id,
    title: serie.name,
    posterPath: serie.poster_path,
    overview: serie.overview,
    href: `/series/${serie.id}`,
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
