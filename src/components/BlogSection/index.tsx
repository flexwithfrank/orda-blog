import { BlogPostCard } from "../BlogPostCard"
import Post from "types/post"

type Props = {
  allPosts: Post[]
}

export function BlogSection({ allPosts }: Props) {
  return (
    <>
      <div className="w-11/12 md:max-w-7xl my-24 mx-auto grid md:grid-cols-4 auto-rows-2 gap-x-8 gap-y-8 md:gap-y-16">
        {allPosts.map((post) => {
          return (
            <BlogPostCard
              coverImage={post.coverImage}
              key={post.title}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              category={post.category}
            />
          )
        })}
      </div>
    </>
  )
}
