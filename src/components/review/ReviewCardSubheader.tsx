import { literalDateTime } from "@/lib/other/dayjs";
import { formatRating } from "@/utils/utils";
import { Chip, Stack, Typography } from "@mui/material";
import RatingIcon from "../rating/RatingIcon";

interface Props {
  rating: number | null;
  publishedAt: string;
}

const ReviewCardSubheader = ({ rating, publishedAt }: Props) => {
  return (
    <Stack direction="row" alignItems="center" spacing={0.8}>
      {rating !== null && (
        <Chip
          size="small"
          label={
            <Typography variant="body2">
              <RatingIcon size={15} sx={{ marginBottom: "-2px" }} />{" "}
              {formatRating(rating)}
            </Typography>
          }
        />
      )}

      <Typography variant="body2" color="text.secondary">
        {literalDateTime(publishedAt)}
      </Typography>
    </Stack>
  );
};

export default ReviewCardSubheader;
