import { PaginatedResponse } from "@/types/ApiResponse.type";
import { MovieResult } from "@/types/Movie.type";
import { Suspense } from "react";
import MoviesGridPaginatedContent from "./MoviesGridPaginatedContent";
import PageGridSkeleton from "@/components/page-grid/PageGridSkeleton";

interface Props {
  filters: Record<string, string>;
  service: (
    filters: Record<string, string>,
  ) => Promise<PaginatedResponse<MovieResult>>;
}

const MoviesGridPaginated = ({ filters, service }: Props) => {
  return (
    <Suspense key={JSON.stringify(filters)} fallback={<PageGridSkeleton />}>
      <MoviesGridPaginatedContent filters={filters} service={service} />
    </Suspense>
  );
};

export default MoviesGridPaginated;
