import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XYFORA APIs | Full-Stack REST Services",
  description: "High-performance RESTful APIs by XYFORA, built with Express and NestJS to power modern web apps, websites, and scalable e-commerce platforms.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};