import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 right-0 h-16 w-full md:w-[calc(100%-18rem)] md:ml-72 bg-zinc-900/95 border-b border-zinc-800 z-50">
      <div className="h-full px-4 md:px-8">
        <ul className="h-full flex items-center justify-center md:justify-start space-x-6 md:space-x-8">
          <li>
            <Link href="/" className="text-sm md:text-base text-zinc-400 hover:text-zinc-100 transition-colors">
              关于
            </Link>
          </li>
          <li>
            <Link href="/resume" className="text-sm md:text-base text-zinc-400 hover:text-zinc-100 transition-colors">
              简历
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-sm md:text-base text-zinc-400 hover:text-zinc-100 transition-colors">
              博客
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
