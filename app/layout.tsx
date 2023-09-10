import './globals.css'
import type { Metadata } from 'next'
import { Viewport } from 'next/dist/lib/metadata/types/extra-types'
import { Josefin_Sans } from 'next/font/google'


const josefin = Josefin_Sans({ subsets: ['latin'] })

const viewportConfig: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Created with love by @oniasfilho',
  viewport: viewportConfig
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
