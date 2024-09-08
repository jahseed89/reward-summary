import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Rewards Summary',
  description: 'Allowing users to track their earning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-lightgrey-200'>{children}</body>
    </html>
  )
}
