"use client";

import ErrorContainer from "@/components/layout/ErrorContainer";
import { Alert, AlertTitle, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorContainer>
      <Typography variant="h5" textAlign="center" gutterBottom>
        {error.message}
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
