 import { Metadata } from 'next'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Blog - ${params.slug}`,
  }
}

export default function BlogPost({ params }: Props) {
  return (
    <article className="prose dark:prose-invert">
      <h1>Blog Post: {params.slug}</h1>
      <div>
        {/* Blog content will go here */}
        <p>Coming soon...</p>
      </div>
    </article>
  )
}