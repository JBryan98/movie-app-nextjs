import { Autocomplete, TextField } from "@mui/material";
import { useMemo } from "react";

interface Props<T> {
  /**
   * Array of options to select from
   */
  options: T[];
  /**
   * Key of the option object to use as id.
   * This is also used to get the selected values.
   * @example "id" movie.id
   */
  idKey: keyof T;
  /**
   * Label for the text field
   */
  textFieldLabel: string;
  /**
   * Key of the option object to use as label
   * @example "title" movie.title
   */
  optionLabelKey?: keyof T;
  /**
   * Custom render for option labels
   */
  optionLabelCallback?: (option: T) => string;
  /**
   * Selected values
   */
  values: any[];
  /**
   * Callback when the selected values change
   */
  onChange: (values: any[] | null) => void;
}

const AutocompleteMultipleForm = <T,>({
  options,
  idKey,
  textFieldLabel,
  optionLabelKey,
  optionLabelCallback,
  values,
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

  const selectedValues = useMemo(
    () => options.filter((option) => values.includes(option[idKey])),
    [values],
  );
  return (
    <Autocomplete
      multiple
      value={selectedValues}
      options={options}
      onChange={(event, value) => {
        if (value.length === 0 || value === null) {
          onChange(null);
        } else {
          onChange(value.map((v) => v[idKey]));
        }
      }}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={(option: T, value: T) =>
        option[idKey] === value[idKey]
      }
      renderInput={(params) => (
        <TextField {...params} label={textFieldLabel} variant="outlined" />
      )}
    />
  );
};

export default AutocompleteMultipleForm;
