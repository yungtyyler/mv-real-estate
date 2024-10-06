import type { Metadata } from 'next';
import './globals.css';
import { Footer, Header } from '@/components';
import { cormorant } from '@/fonts';

export const metadata: Metadata = {
  title: 'Marissa Varzeas - Real Estate Agent',
  description:
    'Marissa Varzeas is a real estate agent in the Orange County, California. She is a young, motivated, and dedicated agent who is ready to help you find your dream home.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative min-h-full flex flex-col ${cormorant.className} tracking-widest font-extralight`}>
        <Header />
        <main className="w-full h-full flex flex-col relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
