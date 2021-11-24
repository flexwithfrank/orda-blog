import { getAllPages, getPageBySlug } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { NextSeo } from "next-seo";

export default function TextBasedPage({ page }) {
  return (
    <>
      <NextSeo title={page.title} description={page.excerpt} />
      <Header />
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center my-16">
        <article className="prose lg:prose-xl">
          <h1>{page.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </article>
      </div>
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
  const page = getPageBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(page.content || "");

  return {
    props: {
      page: {
        ...page,
        content,
      },
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const pages = getAllPages(["slug"]);
  return {
    paths: pages.map((page) => {
      return {
        params: {
          slug: page.slug,
        },
      };
    }),
    fallback: false,
  };
}
