"use client";

import { literalDateTime } from "@/lib/other/dayjs";
import { Review } from "@/types/Movie.type";
import { truncateText } from "@/utils/utils";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useState } from "react";
import CardAvatar from "./CardAvatar";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  const [showFullReview, setShowFullReview] = useState<boolean>(false);
  const maxContentLength = 190;
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
        subheader={literalDateTime(review.created_at)}
      />
      <CardContent>
        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
          textAlign="justify"
        >
          {showFullReview
            ? review.content
            : truncateText(review.content, maxContentLength)}
        </Typography>
        <Typography
          color="primary"
          variant="body1"
          sx={{ display: isTruncated ? "block" : "none" }}
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
