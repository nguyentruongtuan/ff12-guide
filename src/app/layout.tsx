import LootContextProvider from '@/context/bazaar-context'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FF12 Bazaar',
  description: 'Demo app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <LootContextProvider>

        <body className={inter.className}>{children}</body>
      </LootContextProvider>
    </html>
  )
}
