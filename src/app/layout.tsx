import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Bill Xu | Software Developer</title>
      <body className="bg-white dark:bg-black transition-colors duration-300">
        <ThemeProvider>
        <Navbar />
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
