import "./globals.css";
import { Montserrat } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Metadata } from "next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henhen Imam M - Web Developer, Android Developer, and Coding Teacher",
  description: "Personal Website of Henhen Imam M",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics />
      <body className={`mx-auto max-w-5xl ${montserrat.className}`}>
        <Providers
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ToastContainer />
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
