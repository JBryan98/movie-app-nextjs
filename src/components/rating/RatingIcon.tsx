import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { IconProps } from "@mui/material";
import { SxProps, Theme } from '@mui/material/styles';

interface Props {
  size?: number;
  sx?: SxProps<Theme>;
}

const RatingIcon = ({ size, sx }: Props) => {
  return <StarIcon sx={{ color: "#FDCC0D", fontSize: `${size || 18}px`, ...sx }} />;
};

export default RatingIcon;
