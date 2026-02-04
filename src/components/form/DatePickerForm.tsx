import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

interface Props {
  label: string;
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
}

export const DatePickerForm = ({ label, value, onChange }: Props) => {
  return (
    <DatePicker
      label={label}
      value={value}
      onChange={onChange}
      format="DD/MM/YYYY"
      slotProps={{
        textField: {
          variant: "outlined",
          fullWidth: true,
        },
      }}
    />
  );
};
