import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PrimaryFeature from "@/components/PrimaryFeature";
import SecondFeature from "@/components/SecondFeature";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SecondFeature />
    </>
  );
}
