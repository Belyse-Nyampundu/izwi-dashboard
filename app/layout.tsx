import './globals.css'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: 
{
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer
        autoClose={5000}
        position='top-left'
        theme='dark'
        
        />
        <div className='flex'>
    
          {children}
          </div>
       
    
        </body>
    </html>
  )
}


