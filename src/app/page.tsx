import CTA from "@/components/CTA";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Expertise />
      <CTA />
    </main>
  );
}
