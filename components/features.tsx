import { Shield, Radio, Cpu, Zap } from "lucide-react"

const features = [
  {
    name: "Quantum-Secure Encryption",
    description: "Built with Kyber ML-KEM FIPS 203 compliant cryptography that's resistant to quantum computing attacks.",
    icon: Shield,
  },
  {
    name: "Decentralized Radio Communication",
    description: "Leveraging open-source Meshtastic protocol for resilient, off-grid mesh networking with no central infrastructure.",
    icon: Radio,
  },
  {
    name: "Hardware TRNG Security",
    description: "True Random Number Generation (TRNG) in hardware for cryptographic operations that can't be compromised.",
    icon: Cpu,
  },
  {
    name: "Low-Power Operation",
    description: "Optimized for efficiency on embedded devices, enabling long-lasting battery life for field deployments.",
    icon: Zap,
  },
]

export default function Features() {
  return (
    <section id="features" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Post-Quantum Mesh Network</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          KyMesh combines open-source radio communication with quantum-resistant encryption for secure, decentralized connectivity.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
