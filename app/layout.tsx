import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gaming Dashboard',
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
