"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

interface ProvidersChildrenProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersChildrenProps) {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
