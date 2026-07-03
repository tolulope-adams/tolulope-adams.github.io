import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tolulope Adams — Software Engineer',
  description: 'Software Engineer specialising in Android, Spring Boot backends, and Next.js web apps.',
  openGraph: {
    title: 'Tolulope Adams — Software Engineer',
    description: 'Software Engineer specialising in Android, Spring Boot backends, and Next.js web apps.',
    images: ['/images/my-picture-3.jpeg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tolulope Adams — Software Engineer',
    description: 'Software Engineer specialising in Android, Spring Boot backends, and Next.js web apps.',
    images: ['/images/my-picture-3.jpeg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={['light', 'dark', 'winter', 'magical']}
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


