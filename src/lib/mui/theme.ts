"use client";
import { esES as coreEsES } from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";
import { esES as datePickerEsES } from "@mui/x-date-pickers/locales";
const theme = createTheme(
  {
    typography: {
      fontFamily: "var(--font-roboto)",
    },
    cssVariables: {
      colorSchemeSelector: "data",
    },
    colorSchemes: {
      //light: true,
      dark: true,
    },
    palette: {
      mode: "dark",
    },
  },
  coreEsES,
  datePickerEsES,
);

export default theme;
