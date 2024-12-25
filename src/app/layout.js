import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nectar',
  description: 'Find your favorite groceries',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${inter.className} h-full`}>
        <div className="flex flex-col min-h-full bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}