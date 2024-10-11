"use client";

import { NextUIProvider } from "@nextui-org/react";

interface ProvidersChildrenProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersChildrenProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
