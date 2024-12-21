import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {
  return (
    <div className="p-4 md:ml-72 md:p-8">
      <section className="mb-8 md:mb-12">
        <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-bold">关于我</h2>
        <p className="mb-4 md:mb-6 text-zinc-400">
        我是一名高级运维工程师。拥有9年丰富的运维经验，维护过海外电商、erp系统、业务中台、量化金融平台、智能问答、智能外呼产品。
        擅长devops、linux、中间件部署、应用部署、shell和python脚本编写、问题排查。
        </p>
        <p className="text-zinc-400">
        我的日常工作：负责项目应用功能发布，编写脚本，监控部署，问题排查和答疑。
        </p>
      </section>

      <section className="mb-8 md:mb-12">
        <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-bold">我正在做的</h2>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="bg-zinc-800/50">
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-2 text-lg md:text-xl font-semibold">我正在做什么</h3>
              <p className="text-zinc-400">在自我提升上，通过阅读专业书籍、社区交流来优化技能。</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800/50">
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-2 text-lg md:text-xl font-semibold">运维</h3>
              <p className="text-zinc-400">产品功能发布，应用部署，问题排查，脚本编写，服务器的维护</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-bold">相处感言</h2>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          <Dialog>
            <DialogTrigger asChild>
              <CardContent className="flex gap-4 p-4 md:p-6 cursor-pointer hover:bg-zinc-700/50 transition-colors">
                <Image
                  src="/avatar-placeholder.svg"
                  alt="Lucas Liang"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="mb-2 font-semibold">Lucas Liang</h3>
                  <p className="text-sm text-zinc-400">
                  面对生产环境中的突发故障，能够迅速定位问题，解决问题并进行根本原因分析...
                  </p>
                </div>
              </CardContent>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Lucas Liang 的评价</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <p>
                面对生产环境中的突发故障，能够迅速定位问题，解决问题并进行根本原因分析。对于复杂的运维问题（如性能瓶颈、系统安全漏洞等），能采取有效措施进行优化和修复。
                </p>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <CardContent className="flex gap-4 p-4 md:p-6 cursor-pointer hover:bg-zinc-700/50 transition-colors">
                <Image
                  src="/avatar-placeholder.svg"
                  alt="Ava Zhang"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="mb-2 font-semibold">Ava Zhang</h3>
                  <p className="text-sm text-zinc-400">
                  不仅能完成分配的任务，还经常主动提出系统优化和流程改进的建议...
                  </p>
                </div>
              </CardContent>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Ava Zhang 的评价</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <p>
                不仅能完成分配的任务，还经常主动提出系统优化和流程改进的建议。例如，在系统性能方面提出了一些值得实施的优化方案，帮助团队提升了整体运维效率。
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  )
}
