import type { Metadata } from 'next';
import './globals.css';
import { Footer, Header, META_DESCRIPTION, META_TITLE } from '@/components';
import { cormorant } from '@/fonts';
import FooterBanner from '@/components/layouts/FooterBanner';

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative min-h-screen flex flex-col ${cormorant.className} tracking-widest font-extralight`}>
        <Header />
        <main className="w-full h-full flex flex-col relative">{children}</main>
        <Footer />
        <FooterBanner />
      </body>
    </html>
  );
}
