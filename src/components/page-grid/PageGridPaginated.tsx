import { Stack } from "@mui/material";
import AppPagination from "../pagination/Pagination";
import PageGrid from "./PageGrid";
import { PageGridItem } from "./PageGridItem.type";

interface Props {
  items: PageGridItem[];
  totalPages: number;
  currentPage: number;
}

const PageGridPaginated = ({ items, totalPages, currentPage }: Props) => {
  return (
    <Stack flexDirection="column" gap={2}>
      <PageGrid items={items} />
      <AppPagination totalPages={totalPages} currentPage={currentPage} />
    </Stack>
  );
};

export default PageGridPaginated;
