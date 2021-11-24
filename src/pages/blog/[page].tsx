import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ReadyToLaunch } from "components/ReadyToLaunch";
import { BlogSection } from "components/BlogSection";
import Link from "next/link";
import { getAllPosts, getPostSlugs } from "lib/api";

const POSTS_PER_PAGE = 8;

export default function BlogPage({ posts, page, total }) {
  const numberOfPages = Math.ceil(total / POSTS_PER_PAGE);

  const pagesIndex = [];
  for (let i = 0; i < numberOfPages; i++) {
    pagesIndex.push(i + 1);
  }

  const hasNextPage = numberOfPages > page;
  const hasPreviousPage = page > 1;
  return (
    <>
      <Header />
      <BlogSection posts={posts} />
      {posts && (
        <>
          <div className="flex justify-center items-center space-x-1">
            {hasPreviousPage && (
              <Link href={`/blog/${page - 1}`}>
                <a className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                  </svg>
                </a>
              </Link>
            )}
            {pagesIndex.slice(0, 3).map((pageIndex) => {
              return (
                <Link href={`/blog/${pageIndex}`} key={pageIndex} passHref>
                  <a className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                    {pageIndex}
                  </a>
                </Link>
              );
            })}
            {hasNextPage && (
              <Link href={`/blog/${page + 1}`}>
                <a className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </Link>
            )}
          </div>
        </>
      )}
      <ReadyToLaunch />
      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  // Get total pages
  const pages = Math.ceil(getPostSlugs().length / POSTS_PER_PAGE);
  // Generate paths for Next.js. It is like: [{ params: { page: 1 } }, { params: { page: 2 }},...]

  const paths = Array.from(Array(pages).keys()).map((page) => ({
    params: { page: String(page + 1) },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { page } = params;
  const { posts, total } = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "coverImage",
    "category",
  ]);
  return {
    props: {
      posts: posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE),
      page: Number(page),
      total,
    },
  };
};
