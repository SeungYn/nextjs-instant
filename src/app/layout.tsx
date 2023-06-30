import Navbar from '@/components/Navbar';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import AuthContext from '../context/AuthContext';
import ReactQueryContext from '../context/ReactQueryContext';
import { Metadata } from 'next';
const openSans = Open_Sans({ subsets: ['latin'] });

// template 를 사용하여 하위 metadata의 타이틀을 이어서 작성하도록 해줌
export const metadata: Metadata = {
  title: {
    default: 'Instantgram',
    template: 'Instantgram | %s',
  },
  description: 'Instantgram Photos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko' className={openSans.className}>
      <body className='w-full bg-neutral-50'>
        <AuthContext>
          <ReactQueryContext>
            <header className='sticky top-0 border-b z-20'>
              <div className='max-w-screen-xl mx-auto'>
                <Navbar />
              </div>
            </header>
            <main className='w-full flex justify-center max-w-screen-xl mx-auto'>
              {children}
            </main>
          </ReactQueryContext>
        </AuthContext>
        <div id='portal'></div>
      </body>
    </html>
  );
}
