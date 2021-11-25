import { AppProps } from "next/app";
import "../styles/globals.css";
import { ModalProvider } from "context/modalContext";
import SignUpPopUp from "../components/SignUpPopUp";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <ModalProvider>
        <SignUpPopUp />
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}
