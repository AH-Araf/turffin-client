import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "../components/common/Footer/Footer";
import { MainContent } from "../components/common/MainContent/MainContent";
import { NavBar } from "../components/common/NavBar/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Turffin",
  description: "Find and book premium sports turfs across Bangladesh.",
};

/** Lets `env(safe-area-inset-*)` apply on notched phones (dashboard chrome). */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <NavBar />
        <MainContent>{children}</MainContent>
        <Footer />
      </body>
    </html>
  );
}
