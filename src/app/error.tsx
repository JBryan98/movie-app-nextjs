"use client";

import ErrorContainer from "@/components/layout/ErrorContainer";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setErrorMessage(error.message);
  }, [error]);

  return (
    <ErrorContainer>
      <Typography variant="h5" textAlign="center" gutterBottom>
        {errorMessage}
      </Typography>
      <div>
        <Image
          src="/error.svg"
          alt="Página no encontrada"
          width={300}
          height={300}
        />
      </div>
      <Button variant="contained" LinkComponent={Link} href="/">
        Volver al inicio
      </Button>
    </ErrorContainer>
  );
}
