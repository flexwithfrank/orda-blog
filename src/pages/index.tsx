import { Button } from "components/Button";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ReadyToLaunch } from "components/ReadyToLaunch";
import { NextSeo } from "next-seo";
import { SignUpButton } from "../components/SignUpButton";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Orda - Mobile App Builder - iOS &amp; Android App Builder."
        description="Next generation mobile ordering app builder for Square that gives your customers convenience and puts your brand at their fingertips"
        canonical={`https://getorda.com}`}
      />
      <div className="space-y-16">
        <Header />
        <Button text="This is a Custom Button" />
        <SignUpButton bgColor="black" />
        <ReadyToLaunch subDescription="Sub description" />
        <Footer />
      </div>
    </>
  );
}
