import { getAllPosts, getPostBySlug } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import PostType from "types/post";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ReadyToLaunch } from "components/ReadyToLaunch";
import Image from "next/image";
import { NextSeo } from "next-seo";

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  return (
    <>
      <NextSeo
        title={`${post.title}`}
        description={`${post.excerpt}`}
        canonical={`https://getorda.com/blog/posts/${post.slug}`}
        openGraph={{
          url: `https://getorda.com/blog/posts/${post.slug}`,
          title: `${post.title}`,
          description: `${post.excerpt}`,
          images: [
            {
              url: `${post.coverImage}`,
              width: 800,
              height: 600,
              type: "image/jpeg",
            },
          ],
          site_name: "Orda",
        }}
      />
      <Header />
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center my-16">
        <Image
          className="object-cover w-full rounded-md mb-16"
          src={post.coverImage}
          height={400}
          width={754}
        />
        <div className="mt-8">
          <article className="prose lg:prose-xl">
            <h1 className="font-cerebri">{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </div>
      <ReadyToLaunch />
      <Footer />
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { posts } = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
