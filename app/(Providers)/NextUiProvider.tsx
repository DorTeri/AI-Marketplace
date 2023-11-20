import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

interface ProviderProps {
    children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}