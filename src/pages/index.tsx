import { Button } from "components/Button"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { ReadyToLaunch } from "components/ReadyToLaunch"

export default function Home() {
  return (
    <div className="space-y-16">
      <Header />
      <Button />
      <ReadyToLaunch />
      <Footer />
    </div>
  )
}
