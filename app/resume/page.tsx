import { BookOpen, Briefcase } from 'lucide-react'

export default function Resume() {
  const skills = [
    { name: "shell", level: 90 },
    { name: "Phthon", level: 70 },
    { name: "MySQL", level: 80 },
    { name: "Linux", level: 90 },
    { name: "中间件部署", level: 90 },
    { name: "自动化运维", level: 80 },
    { name: "问题排查", level: 80 },
    { name: "Docker", level: 90 },
    { name: "Git", level: 80 },
  ]

  return (
    <div className="ml-72 p-8">
      <h1 className="mb-8 text-4xl font-bold text-zinc-100">简历</h1>
      <div className="relative space-y-8">
        {/* Education Section */}
        <section>
          <div className="flex items-center gap-4 text-xl font-semibold">
            <BookOpen className="h-5 w-5 text-amber-500" />
            <h2>教育</h2>
          </div>
          <div className="mt-4 ml-2 border-l-2 border-zinc-800 pl-6">
            <div className="relative">
              <div className="absolute -left-[29px] h-4 w-4 rounded-full bg-amber-500" />
              <div>
                <h3 className="text-lg">电子科技大学</h3>
                <p className="mt-1 text-sm text-zinc-400">计算机科学与技术</p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section>
          <div className="flex items-center gap-4 text-xl font-semibold">
            <Briefcase className="h-5 w-5 text-amber-500" />
            <h2>工作经历</h2>
          </div>
          <div className="mt-4 ml-2 border-l-2 border-zinc-800 pl-6 space-y-6">
            <div className="relative">
              <div className="absolute -left-[29px] h-4 w-4 rounded-full bg-amber-500" />
              <div>
                <h3 className="text-lg">高级运维工程师</h3>
                <p className="text-sm text-amber-500">2023.9-现在</p>
                <p className="mt-1 text-sm text-zinc-400">智能问答、智能外呼产品的运维</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[29px] h-4 w-4 rounded-full bg-amber-500" />
              <div>
                <h3 className="text-lg">高级运维工程师</h3>
                <p className="text-sm text-amber-500">2021.9-2023.8</p>
                <p className="mt-1 text-sm text-zinc-400">高性能回测云计算SaaS软件服务平台的运维</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[29px] h-4 w-4 rounded-full bg-amber-500" />
              <div>
                <h3 className="text-lg">运维工程师</h3>
                <p className="text-sm text-amber-500">2019.6-2021.9</p>
                <p className="mt-1 text-sm text-zinc-400">负责公司海外主站的运维</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[29px] h-4 w-4 rounded-full bg-amber-500" />
              <div>
                <h3 className="text-lg">运维工程师</h3>
                <p className="text-sm text-amber-500">2015.10-2019.3</p>
                <p className="mt-1 text-sm text-zinc-400">公司产品运维、服务器维护、问题排查</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="mb-6 text-xl font-semibold">我的技能</h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-800">
                  <div
                    className="h-2 rounded-full bg-amber-500 transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

