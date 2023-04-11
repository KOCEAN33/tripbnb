import { Nunito } from 'next/font/google';

import './globals.css';

import ClientOnly from '@/app/components/ClientOnly';
import Navbar from '@/app/components/navbar/Navbar';
import RegisterModal from '@/app/components/modals/RegisterModal';
import ToasterProvider from '@/app/providers/ToasterProvider';
import LoginModal from '@/app/components/modals/LoginModal';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // @ts-ignore
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
