import Navbar from '@/components/Navbar';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import AuthContext from './context/AuthContext';
import ReactQueryContext from './context/ReactQueryContext';
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
      <body className='w-full max-w-screen-xl m-auto'>
        <AuthContext>
          <ReactQueryContext>
            <header className='sticky top-0 border-b z-20'>
              <Navbar />
            </header>
            <main className=''>{children}</main>
          </ReactQueryContext>
        </AuthContext>
      </body>
    </html>
  );
}
