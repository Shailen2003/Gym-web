import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturePlans from "@/components/FeaturePlans";
// import Payment from "@/components/Payment";
import MusicSchoolTestimonials from "@/components/TestimonialsCards";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Chai aur Code</h1> */}
      <HeroSection/>
      <FeaturePlans/>
      {/* <Payment /> */}
      {/* <MusicSchoolTestimonials /> */}
    </main>
  );
}
