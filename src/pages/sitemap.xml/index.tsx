import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import { getAllPages, getAllPosts } from "lib/api";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { posts } = getAllPosts(["slug"]);
  const pages = getAllPages(["slug"]);

  const postsSlugs = posts.map(({ slug }) => ({
    loc: `https://getorda.com/blog/posts/${slug}`,
    lastmod: new Date().toISOString(),
  }));

  const pagesSlugs = pages.map(({ slug }) => ({
    loc: `https://getorda.com/${slug}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...postsSlugs, ...pagesSlugs];

  fields.push({
    loc: "https://getorda.com/",
    lastmod: new Date().toISOString(),
  });

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {};
