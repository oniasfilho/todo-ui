import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Created with love by @oniasfilho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${josefin.className} text-[var(--main-text-color)]`}>{children}</body>
    </html>
  )
}
