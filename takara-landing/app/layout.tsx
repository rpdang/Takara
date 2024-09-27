import { ThemeModeScript } from "flowbite-react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Takara",
  description:
    "Centralize all your bank accounts, wallets, assets, and liabilities for a complete financial overview. Get personalized advice and learn as you go.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
