import Image from "next/image";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SecondFeature from "@/components/SecondFeature";
import ThirdFeature from "@/components/ThirdFeature";
import FouthFeature from "@/components/FourthFeature";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SecondFeature />
      <ThirdFeature />
      <FouthFeature />
    </>
  );
}
