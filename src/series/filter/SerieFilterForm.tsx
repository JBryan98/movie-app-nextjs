"use client";

import AutocompleteForm from "@/components/form/AutocompleteForm";
import AutocompleteMultipleForm from "@/components/form/AutocompleteMultipleForm";
import { DatePickerForm } from "@/components/form/DatePickerForm";
import { Status } from "@/services/status.service";
import { Genre } from "@/types/Genre";
import { createUrl } from "@/utils/utils";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  genres: Genre[];
  statuses: Status[];
}
const SerieFilterForm = ({ genres, statuses }: Props) => {
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
  const statusId = searchParams.get("with_status")
    ? +searchParams.get("with_status")!!
    : null;
  const releaseDateGte = searchParams.get("first_air_date.gte")
    ? dayjs(searchParams.get("first_air_date.gte"))
    : null;
  const releaseDateLte = searchParams.get("first_air_date.lte")
    ? dayjs(searchParams.get("first_air_date.lte"))
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

  const handleStatusChange = (value: number | null) => {
    if (value != null) {
      newParams.set("with_status", value.toString());
    } else {
      newParams.delete("with_status");
    }
    newParams.delete("page");
    router.push(createUrl(pathname, newParams));
  };

  const handleReleaseDateGteChange = (newValue: Dayjs | null) => {
    if (newValue) {
      newParams.set("first_air_date.gte", newValue.format("YYYY-MM-DD"));
    } else {
      newParams.delete("first_air_date.gte");
    }
    newParams.delete("page");
    router.push(createUrl(pathname, newParams));
  };

  const handleReleaseDateLteChange = (newValue: Dayjs | null) => {
    if (newValue) {
      newParams.set("first_air_date.lte", newValue.format("YYYY-MM-DD"));
    } else {
      newParams.delete("first_air_date.lte");
    }
    newParams.delete("page");
    router.push(createUrl(pathname, newParams));
  };

  const cleanFilters = () => {
    router.push(pathname);
  };

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{ width: "300px", paddingInline: "8px" }}
    >
      <Typography variant="h5">Filtrar series</Typography>
      <Divider />
      <AutocompleteMultipleForm
        options={genres}
        idKey="id"
        textFieldLabel="Género"
        optionLabelKey="name"
        values={genreIds}
        onChange={handleGenreChange}
      />
      <AutocompleteForm
        options={statuses}
        idKey="id"
        textFieldLabel="Estado"
        optionLabelKey="name"
        value={statusId}
        onChange={handleStatusChange}
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
        {/* <Button variant="contained" color="primary" fullWidth>
              Filtrar
            </Button> */}
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
  );
};
export default SerieFilterForm;
