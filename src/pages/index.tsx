import { Button } from "components/Button"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { ReadyToLaunch } from "components/ReadyToLaunch"
import { SignUpButton } from "../components/SignUpButton"

export default function Home() {
  return (
    <div className="space-y-16">
      <Header />
      <Button text="This is a Custom Button" />
      <SignUpButton bgColor="black" />
      <ReadyToLaunch />
      <Footer />
    </div>
  )
}
