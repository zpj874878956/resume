import { Mail, MapPin, Phone, Calendar } from 'lucide-react'
import Image from "next/image"

export function Sidebar() {
  return (
    <aside className="w-full md:fixed md:h-screen md:w-72 border-b md:border-r border-zinc-800 bg-zinc-900/95 p-6">
      <div className="flex flex-col items-center">
        <Image
          src="/avatar-placeholder.svg"
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full w-24 h-24 md:w-32 md:h-32"
        />
        <h1 className="mt-4 text-xl md:text-2xl font-bold">Jaylen Zhang</h1>
        <p className="text-sm text-zinc-400">高级运维工程师</p>
      </div>

      <div className="mt-6 md:mt-8 space-y-4">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Mail className="h-4 w-4" />
          <span>874878956@qq.com</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Phone className="h-4 w-4" />
          <span>+86 138*827***</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Calendar className="h-4 w-4" />
          <span>138*827***-</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <MapPin className="h-4 w-4" />
          <span>中国深圳</span>
        </div>
      </div>
    </aside>
  )
}
