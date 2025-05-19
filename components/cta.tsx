import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section id="contact" className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 text-sm text-white mb-4">
          Ready to see it in action?
        </div>
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Secure Communications for the Quantum Era
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          KyMesh provides quantum-resistant, decentralized communication infrastructure for critical applications and off-grid environments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button size="lg" asChild>
            <Link href="mailto:contact@kymesh.com">Contact Us</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="https://github.com/kymesh" target="_blank" rel="noreferrer">
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
