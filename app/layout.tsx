import type { Metadata } from "next";
import { Inter, Orbitron, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const orbitonFont = Orbitron({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-orbiton",
});
const robotoFont = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Crypto Pulse",
  description: "View crypto prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitonFont.variable} ${robotoFont.variable} font-primary`}
      >
        {children}
      </body>
    </html>
  );
}
