import "./globals.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "x222c.eu - Crafting Digital Experiences",
  description: "We specialize in web design, branding, and digital marketing to drive results for your business.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}