"use client";

import { Autocomplete, TextField } from "@mui/material";
import { useMemo } from "react";

interface Props<T> {
  /**
   * Array of options to select from
   */
  options: T[];
  /**
   * Key of the option object to use as id.
   * This is also used to get the selected value.
   * @example "id" movie.id
   */
  idKey: keyof T; //Key of the option object to use as id
  /**
   * Label for the text field
   */
  textFieldLabel: string;
  /**
   * Key of the option object to use as label
   */
  optionLabelKey?: keyof T;
  /**
   * Custom render for option labels
   */
  optionLabelCallback?: (option: T) => string;
  /**
   * Selected value
   */
  value: string | number | null;
  /**
   * Callback when the selected value changes
   */
  onChange: (value: any | null) => void;
}

const AutocompleteForm = <T,>({
  options,
  idKey,
  textFieldLabel,
  optionLabelKey,
  optionLabelCallback,
  value,
  onChange,
}: Props<T>) => {
  const getOptionLabel = (option: T): string => {
    if (optionLabelCallback) {
      return optionLabelCallback(option);
    } else if (optionLabelKey) {
      return `${option[optionLabelKey]}`;
    } else {
      throw new Error(
        "Either optionLabelKey or optionLabelCallback must be provided",
      );
    }
  };

  const handleChange = (event: any, newValue: T | null) => {
    if (newValue != null) {
      onChange(newValue[idKey]);
    } else {
      onChange(null);
    }
  };

  // Return null instead of undefined if no matching option is found to avoid uncontrolled to controlled warning
  const selectedValue = useMemo(() => {
    return options.find((option) => option[idKey] === value) || null;
  }, [value]);

  return (
    <Autocomplete
      value={selectedValue}
      options={options}
      onChange={handleChange}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={(option, value) => option[idKey] === value[idKey]}
      renderInput={(params) => (
        <TextField {...params} label={textFieldLabel} variant="outlined" />
      )}
    />
  );
};

export default AutocompleteForm;
