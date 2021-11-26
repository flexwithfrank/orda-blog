import { getAllPosts, getPostBySlug } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import PostType from "types/post";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ReadyToLaunch } from "components/ReadyToLaunch";
import Image from "next/image";
import { NextSeo } from "next-seo";
import dayjs from "dayjs";

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  console.log(post.excerpt);
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
        <div className="flex flex-col space-y-4 w-full md:mx-auto mt-8 md:w-[754px]">
          <div className="space-x-2">
            {post.category
              .split(",")
              .slice(0, 2)
              .map((element) => {
                return (
                  <span
                    key={element}
                    className="bg-darker-blue text-white rounded-full text-xs my-4 py-1 px-2"
                  >
                    {element}
                  </span>
                );
              })}
          </div>
          <div className="flex">
            <Image
              className="object-cover w-full rounded-full"
              src={post.author.picture}
              height={50}
              width={50}
            />
            <div className="flex flex-col ml-4">
              <p className="inline-block">
                {dayjs(post.date).format("MMMM D, YYYY")}
              </p>
              <p className="inline-block">{post.author.name}</p>
            </div>
          </div>
        </div>
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
    "excerpt",
    "date",
    "slug",
    "author",
    "category",
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
