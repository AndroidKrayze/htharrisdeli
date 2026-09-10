import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Reviews } from "@/components/Reviews";
import { StickyBar } from "@/components/StickyBar";
import { TheDeli } from "@/components/TheDeli";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-14">
        <Hero />
        <TheDeli />
        <Menu />
        <Reviews />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
