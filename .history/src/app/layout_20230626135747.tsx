import Navbar from '@/components/Navbar';
import './globals.css';
import { Open_Sans } from 'next/font/google';
const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko' className={openSans.className}>
      <body>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
