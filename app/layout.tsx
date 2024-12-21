import { Metadata } from "next"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Jaylen Zhang - 高级运维工程师",
  description: "Personal portfolio of Jaylen Zhang, a Senior Operations Engineer based in Shenzhen",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className="bg-zinc-900 text-zinc-100">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <Navbar />
            <main className="mt-16">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
