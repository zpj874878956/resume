import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 right-0 h-16 ml-72 w-[calc(100%-18rem)] bg-zinc-900/95 border-b border-zinc-800 px-8 z-50">
      <ul className="h-full flex items-center space-x-8">
        <li>
          <Link href="/" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            关于
          </Link>
        </li>
        <li>
          <Link href="/resume" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            简历
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            博客
          </Link>
        </li>
      </ul>
    </nav>
  )
}
