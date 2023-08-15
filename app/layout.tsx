"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Providers from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "🏡 my home on the internet",
  description: "Henhen Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />

      <body className={`mx-auto max-w-5xl ${montserrat.className}`}>
        <Providers>
          <ToastContainer />
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
