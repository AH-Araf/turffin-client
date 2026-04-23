import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "../components/common/Footer/Footer";
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <NavBar />
        <div className="w-full flex-1 pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
