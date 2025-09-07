import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DisasterEd',
  description: 'Emergency preparedness gaming dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
