import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Zone } from "@/components/Zone";
import { Atouts } from "@/components/Atouts";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <span id="top" />
      <Header />
      <main>
        <Hero />
        <Services />
        <Zone />
        <Atouts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
