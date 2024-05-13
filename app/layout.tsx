import "./globals.css";
import { Theme } from "@radix-ui/themes";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomNavbar from "./components/customNavBar/CustomNavBar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zak&apos;s holds",
  description: "Holds for ya hands",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <CustomNavbar />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
