import { Review } from "@/types/Movie.type";
import { Stack, Typography } from "@mui/material";
import ReviewCard from "./ReviewCard";

interface Props {
  reviews: Review[];
}

const ReviewSection = ({ reviews }: Props) => {
  if (reviews.length === 0) {
    return <Typography variant="body1">No hay reseñas disponibles.</Typography>;
  }
  return (
    <Stack spacing={1}>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </Stack>
  );
};

export default ReviewSection;
