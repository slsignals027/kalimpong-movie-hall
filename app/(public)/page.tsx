import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Shows from "@/components/home/Shows";
import VoteSection from "@/components/home/VoteSection";
import Announcements from "@/components/home/Announcements";
import Gallery from "@/components/home/Gallery";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Shows />
      <VoteSection />
      <Announcements />
      <Gallery />
      <FAQ />
      <Footer />

    </>
  );
}