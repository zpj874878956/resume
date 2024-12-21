import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Blog() {
  const projects = [
    {
      title: "主站",
      description: "技术文章、生活随笔分享",
      // image: "/placeholder.svg?height=200&width=400",
      image: "/zhuzhan.png?height=200&width=400",
      year: "2023",
    },
    {
      title: "技术博客",
      description: "vuepress主题魔改",
      image: "/blog.png?height=200&width=400",
      year: "2023",
    },
    {
      title: "个人导航栏",
      description: "",
      image: "/daohang.png?height=200&width=400",
      year: "2023",
    },
    {
      title: "chatgpt",
      description: "",
      image: "/chat.png?height=200&width=400",
      year: "2023",
    },
  ]

  return (
    <div className="ml-72 p-8">
      <h2 className="mb-6 text-3xl font-bold">博客</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden bg-zinc-800/50">
            <div className="relative aspect-[16/9]">
              <Image
                src={project.image}
                alt={project.title}
                fill={true}
                className="object-cover"
                priority={true}
              />
            </div>
            <CardContent className="p-6">
              <div className="mb-2 text-sm text-zinc-400">网站 • {project.year}年</div>
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="text-zinc-400">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

