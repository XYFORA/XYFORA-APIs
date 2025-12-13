import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XYFORA Full Stack APIs",
  description: "XYFORA Full Stack Restful APIs",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico"
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