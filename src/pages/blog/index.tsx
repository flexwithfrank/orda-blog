import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { ReadyToLaunch } from "components/ReadyToLaunch"
import { BlogSection } from "components/BlogSection"
import { getAllPosts } from "lib/api"

export default function BlogPage({ allPosts }) {
  return (
    <>
      <Header />
      <BlogSection allPosts={allPosts} />
      <ReadyToLaunch />
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "excerpt", "coverImage"])
  return {
    props: { allPosts },
  }
}
