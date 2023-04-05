import { Nunito } from 'next/font/google';

import './globals.css';

import ClientOnly from '@/app/components/ClientOnly';
import Navbar from '@/app/components/navbar/Navbar';
import Modal from '@/app/components/Modals/Modal';

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
          <Modal actionLabel="Submit" title="Hello World" isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
