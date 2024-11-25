// app/page.tsx
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import FeaturePlans from "@/components/FeaturePlans";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturePlans />
      <FooterSection />
    </main>
  );
}
