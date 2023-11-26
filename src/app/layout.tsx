import './globals.css'
import { Inter } from 'next/font/google'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'



const inter = Inter({ subsets: ['latin'] })

export const metadata: OpenGraph = {
  title: 'Naser Allahyany',
  description: 'Explore my portfolio showcasing web development and design projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
            <head>
      <meta property="og:image" content="https://naseroish.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fa.aa283352.png&w=640&q=75" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
