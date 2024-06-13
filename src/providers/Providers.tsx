"use client";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ThemeProvider
        themes={["light", "dark"]}
        defaultTheme="dark"
        enableSystem={false}
        attribute="class"
        enableColorScheme={false}
      >
        {children}
      </ThemeProvider>
    </>
  );
};
export default Providers;
