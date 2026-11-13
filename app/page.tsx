import FeaturesPage from "@/components/FeaturesPage";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturesPage />
      </main>
    </>
  );
}
