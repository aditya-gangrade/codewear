"use client";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Header />
          {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
