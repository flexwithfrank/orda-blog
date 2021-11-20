import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { ReadyToLaunch } from "components/ReadyToLaunch"
import { BlogPostCard } from "components/BlogPostCard"

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogPostCard />
      <ReadyToLaunch />
      <Footer />
    </>
  )
}
