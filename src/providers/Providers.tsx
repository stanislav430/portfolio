"use client";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <RecoilRoot>
      <ThemeProvider
        themes={["light", "dark"]}
        defaultTheme="dark"
        enableSystem={false}
        attribute="class"
        enableColorScheme={false}
      >
        {children}
      </ThemeProvider>
    </RecoilRoot>
  );
};
export default Providers;
