import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components";

export const metadata: Metadata = {
  title: "Marissa Varzeas - Real Estate Agent",
  description:
    "Marissa Varzeas is a real estate agent in the Orange County, California. She is a young, motivated, and dedicated agent who is ready to help you find your dream home.",
  icons: "/logos/initial.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen flex flex-col">
        <Header />
        <div className="w-[800px] h-[800px] rounded-full bg-pink-gradient absolute top-[30px] left-[-150px] -z-10" />
        <main className="grow relative w-full h-full flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
