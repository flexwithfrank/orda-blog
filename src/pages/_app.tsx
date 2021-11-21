import { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import { ModalProvider } from "context/modalContext"
import SignUpPopUp from "../components/SignUpPopUp"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <SignUpPopUp />
      <Component {...pageProps} />
    </ModalProvider>
  )
}
