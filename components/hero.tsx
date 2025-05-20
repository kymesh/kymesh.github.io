import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 pt-12 pb-24 text-center md:pt-16 md:pb-32">
      <div className="space-y-6">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Your Communications <br className="mb-2" /> <span className="text-red-500">Are Not Secure</span>
        </h1>
      </div>

      <div className="relative w-full max-w-md mx-auto mt-8">
        <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
          <Image
            src="/computer.png"
            alt="KyMesh quantum-resistant secure communication device"
            width={800}
            height={600}
            priority
            className="object-contain"
          />
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button size="lg" asChild>
          <Link href="#features">Learn More</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="#contact">Get a Demo</Link>
        </Button>
      </div>
    </section>
  );
}
