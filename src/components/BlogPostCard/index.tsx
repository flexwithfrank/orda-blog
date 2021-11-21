import Image from "next/image"
import Link from "next/link"

type BlogPostCardProps = {
  title: string
  excerpt: string
  slug: string
  coverImage: string
}

export function BlogPostCard({
  title,
  excerpt,
  slug,
  coverImage,
}: BlogPostCardProps) {
  return (
    <Link href={`/blog/posts/${slug}`}>
      <a className="bg-gray-200 w-full min-h-[150px] rounded-3xl px-4 py-4">
        <div className="">
          <Image
            src={"https://via.placeholder.com/300"}
            width={300}
            height={250}
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="my-3">
          <span className="bg-darker-blue text-white rounded-full text-xs my-4 py-1 px-2">
            Category
          </span>
        </div>
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm">{excerpt}</p>
        <Link href={`/blog/posts/${slug}`}>
          <a className="text-sm font-semibold">Read more</a>
        </Link>
      </a>
    </Link>
  )
}
