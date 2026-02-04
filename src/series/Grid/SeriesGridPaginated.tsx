import PageGridSkeleton from "@/components/page-grid/PageGridSkeleton";
import { PaginatedResponse } from "@/types/ApiResponse.type";
import { SerieResult } from "@/types/Serie.type";
import { Suspense } from "react";
import SeriesGridPaginatedContent from "./SeriesGridPaginatedContent";

interface Props {
  filters: Record<string, string>;
  service: (
    filters: Record<string, string>,
  ) => Promise<PaginatedResponse<SerieResult>>;
}

const SeriesGridPaginated = ({ filters, service }: Props) => {
  return (
    <Suspense key={JSON.stringify(filters)} fallback={<PageGridSkeleton />}>
      <SeriesGridPaginatedContent searchParams={filters} service={service} />
    </Suspense>
  );
};

export default SeriesGridPaginated;
