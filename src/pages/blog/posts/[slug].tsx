import { useRouter } from "next/router"
import ErrorPage from "next/error"
import { getAllPosts, getPostBySlug } from "lib/api"
import markdownToHtml from "lib/markdownToHtml"
import PostType from "types/post"

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  return <pre>{JSON.stringify(post, null, 2)}</pre>
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
