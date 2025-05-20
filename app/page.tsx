import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { MatrixEffect } from "@/components/matrix-effect"
import SoundPlayer from "@/components/sound-player"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background effects */}
      <MatrixEffect />
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </div>
      
      {/* Sound player */}
      <SoundPlayer />
    </div>
  )
}
