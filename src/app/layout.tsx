import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/partials/Navbar';
import Footer from '@/components/partials/Footer';
import ClientLayout from '@/components/partials/ClientLayouts';
const getPoppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  preload: false,  // ← ini yang penting
});

export const metadata: Metadata = {
  title: 'A.N.I Tech',
  description: 'About A.N.I',
  icons: {
    icon: '/img/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${getPoppins.variable} antialiased`}>
        <Navbar />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
