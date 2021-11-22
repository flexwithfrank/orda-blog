import { getAllPosts, getPostBySlug } from "lib/api"
import markdownToHtml from "lib/markdownToHtml"
import PostType from "types/post"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { ReadyToLaunch } from "components/ReadyToLaunch"
import Image from "next/image"

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  console.log(post.coverImage)

  return (
    <>
      <Header />
      <div className="w-11/12  mx-auto flex flex-col justify-center items-center my-16">
        <Image src={post.coverImage} height={400} width={700} />
        <h1 className="text-2xl sm:text-4xl font-bold text-left sm:w-1/2 my-8">
          {post.title}
        </h1>
        <article className="prose lg:prose-xl">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
      <ReadyToLaunch />
      <Footer />
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ])
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])
  console.log(posts)
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
