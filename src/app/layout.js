import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oussema Bouchoucha',
  description: 'As a Full Stack JavaScript/TypeScript developer, I specialize in building scalable applications using React, Node.js and NextJS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
