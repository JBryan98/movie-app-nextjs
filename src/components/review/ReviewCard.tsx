"use client";

import { Review } from "@/types/Movie.type";
import { truncateText } from "@/utils/utils";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CardAvatar from "./CardAvatar";
import ReviewCardSubheader from "./ReviewCardSubheader";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  const [showFullReview, setShowFullReview] = useState<boolean>(false);
  const maxContentLength = 220;
  const isTruncated = review.content.length > maxContentLength;
  return (
    <Card>
      <CardHeader
        avatar={
          <CardAvatar
            url={review.author_details.avatar_path}
            name={review.author}
          />
        }
        title={review.author}
        subheader={<ReviewCardSubheader rating={review.author_details.rating} publishedAt={review.created_at} />}
        sx={{ paddingBottom: 0 }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          component="p"
          textAlign="justify"
        >
          {showFullReview
            ? review.content
            : truncateText(review.content, maxContentLength)}
        </Typography>
        <Typography
          color="primary"
          variant="body2"
          sx={{ width: "fit-content", display: isTruncated ? "block" : "none" }}
          onClick={() => setShowFullReview(!showFullReview)}
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          {showFullReview ? "Mostrar menos" : "Mostrar más"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
