import "./globals.css";

export const metadata = {
  title: "XYFORA APIs",
  description: "XYFORA APIs",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};