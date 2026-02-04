"use client";

import AutocompleteMultipleForm from "@/components/form/AutocompleteMultipleForm";
import { DatePickerForm } from "@/components/form/DatePickerForm";
import { Genre } from "@/types/Genre";
import { createUrl } from "@/utils/utils";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  genres: Genre[];
}

const MovieFilterForm = ({ genres }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());

  const genreIds = searchParams.get("with_genres")
    ? searchParams
        .get("with_genres")!!
        .split(",")
        .map((id) => +id)
    : [];
  const releaseDateGte = searchParams.get("release_date.gte")
    ? dayjs(searchParams.get("release_date.gte"))
    : null;
  const releaseDateLte = searchParams.get("release_date.lte")
    ? dayjs(searchParams.get("release_date.lte"))
    : null;

  const handleGenreChange = (value: number[] | null) => {
    if (value) {
      newParams.set("with_genres", value.map((v) => v.toString()).join(","));
    } else {
      newParams.delete("with_genres");
    }
    newParams.delete("page");
    router.push(createUrl(pathname, newParams));
  };

  const handleReleaseDateGteChange = (newValue: Dayjs | null) => {
    if (newValue) {
      newParams.set("release_date.gte", newValue.format("YYYY-MM-DD"));
    } else {
      newParams.delete("release_date.gte");
    }
    newParams.delete("page");
    router.push(createUrl(pathname, newParams));
  };

  const handleReleaseDateLteChange = (newValue: Dayjs | null) => {
    if (newValue) {
      newParams.set("release_date.lte", newValue.format("YYYY-MM-DD"));
    } else {
      newParams.delete("release_date.lte");
    }
    newParams.delete("page");
    router.push(createUrl(pathname, newParams));
  };

  const cleanFilters = () => {
    router.push(pathname);
  };

  return (
    <Paper elevation={2}>
      <Stack
        direction="column"
        spacing={2}
        sx={{ width: "300px", paddingInline: "8px" }}
      >
        <Typography variant="h5">Filtrar películas:</Typography>
        <AutocompleteMultipleForm
          options={genres}
          idKey="id"
          textFieldLabel="Género"
          optionLabelKey="name"
          values={genreIds}
          onChange={handleGenreChange}
        />
        <DatePickerForm
          label="Desde"
          value={releaseDateGte}
          onChange={handleReleaseDateGteChange}
        />
        <DatePickerForm
          label="Hasta"
          value={releaseDateLte}
          onChange={handleReleaseDateLteChange}
        />
        <Box>
          <Button
            variant="contained"
            color="warning"
            fullWidth
            onClick={cleanFilters}
          >
            Limpiar
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};

export default MovieFilterForm;
