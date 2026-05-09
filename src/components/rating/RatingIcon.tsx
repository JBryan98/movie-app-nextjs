import React from "react";
import StarIcon from "@mui/icons-material/Star";

interface Props {
  size?: number;
}

const RatingIcon = ({ size }: Props) => {
  return <StarIcon sx={{ color: "#FDCC0D", fontSize: `${size || 18}px` }} />;
};

export default RatingIcon;
