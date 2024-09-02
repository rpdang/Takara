import { Inter } from "next/font/google";
import { type FC, type PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Takara",
  description:
    "Centralize all your bank accounts, assets, and liabilities for a complete financial overview. Get personalized advice and learn as you go.",
};

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
