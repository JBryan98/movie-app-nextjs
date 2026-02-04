"use client";

import { CONFIG } from "@/constants/config";
import { createUrl } from "@/utils/utils";
import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  totalPages: number;
  currentPage: number;
}

const AppPagination = ({ totalPages, currentPage }: Props) => {
  if (currentPage > CONFIG.MAX_PAGE) {
    throw new Error("La página solicitada excede el límite permitido.");
  }
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    if (page === 1) {
      newParams.delete("page");
    } else {
      newParams.set("page", page.toString());
    }
    router.push(createUrl(pathname, newParams));
  };

  const pageCount = totalPages > CONFIG.MAX_PAGE ? CONFIG.MAX_PAGE : totalPages; // The API only allows up to page 500

  return (
    <Stack alignItems="center" my={2}>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
      />
    </Stack>
  );
};

export default AppPagination;
