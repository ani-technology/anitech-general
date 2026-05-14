import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/partials/Navbar';
import Footer from '@/components/partials/Footer';
import ClientLayout from '@/components/partials/ClientLayouts';
const getPoppins = localFont({
  variable: '--font-poppins',
  src: [
    {
      path: '../../public/font/Poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/Poppins/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/Poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/font/Poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/font/Poppins/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: false,
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
