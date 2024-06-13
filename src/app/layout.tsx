import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "@/styles/globals.scss";
import styles from "@/styles/layout/MainLayout.module.scss";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Stanislav Danyliuk - Frontend Developer | Responsive Design | React | Vue | React Native - Top-notch Developer from Kyiv, Ukraine</title>
        <meta
          name="description"
          content="Frontend Developer proficient in React, Next.js, Tailwind CSS, Styled Components, Git, and responsive design. Explore my portfolio showcasing dynamic, user-friendly web applications."
        />
      </head>
      <body className={quicksand.className}>
        <main className={styles.layout}>{children}</main>
      </body>
    </html>
  );
}
