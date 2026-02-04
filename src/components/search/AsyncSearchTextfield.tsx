import { getPosterImageUrl } from "@/utils/utils";
import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { SearchOption } from "./SearchOption.type";

interface Props {
  data: SearchOption[];
  searchTerm: string;
  isLoading: boolean;
  onInputChange: (event: React.SyntheticEvent, value: string) => void;
  getOptionLabel: (option: string | SearchOption) => string;
  placeholder?: string;
}

const AsyncSearchTextfield = ({
  data,
  searchTerm,
  isLoading,
  onInputChange,
  getOptionLabel,
  placeholder,
}: Props) => {
  return (
    <Autocomplete
      options={data}
      inputValue={searchTerm}
      onInputChange={onInputChange}
      filterOptions={(x) => x}
      freeSolo
      disableClearable
      getOptionLabel={getOptionLabel}
      loading={isLoading}
      getOptionDisabled={(option) => option.type === "no_results"}
      slotProps={{
        listbox: { style: { maxHeight: "none" } },
      }}
      renderOption={(props, option) => {
        if (option.type === "view_all") {
          return (
            <li {...props} key={option.id} style={{ width: "100%" }}>
              <Link href={option.href!} style={{ width: "100%" }}>
                <Typography variant="body2" textAlign="center">
                  {option.title}
                </Typography>
              </Link>
            </li>
          );
        }
        if (option.type === "no_results") {
          return (
            <li {...props} key={option.id} style={{ width: "100%" }}>
              <Typography variant="body2" textAlign="center">
                {option.title}
              </Typography>
            </li>
          );
        }
        return (
          <li {...props} key={option.id} style={{ width: "100%" }}>
            <Link href={option.href!} style={{ width: "100%" }}>
              <Stack direction="row" spacing={2}>
                <Image
                  src={getPosterImageUrl(option.imagePath!, 200)}
                  alt={option.title}
                  width={50}
                  height={75}
                />
                <div>{option.title}</div>
              </Stack>
            </Link>
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={placeholder || "Buscar"}
          type="search"
          slotProps={{
            input: {
              ...params.InputProps,
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  e.stopPropagation();
                }
              },
              endAdornment: (
                <Fragment>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : (
                    <SearchIcon />
                  )}
                  {params.InputProps?.endAdornment}
                </Fragment>
              ),
            },
          }}
        />
      )}
    />
  );
};

export default AsyncSearchTextfield;
