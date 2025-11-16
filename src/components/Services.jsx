import { Wrench, ShieldCheck, Gauge, CarFront, BadgeCheck } from 'lucide-react'

const services = [
  {
    icon: CarFront,
    title: 'Vehicle Sourcing',
    desc: 'Access exclusive dealer networks to find the exact Lexus model and package you want.'
  },
  {
    icon: Gauge,
    title: 'Test Drives & Inspections',
    desc: 'Arrange test drives and independent inspections for total confidence.'
  },
  {
    icon: ShieldCheck,
    title: 'Negotiation & Financing',
    desc: 'We negotiate best pricing, incentives, and secure optimal financing or lease terms.'
  },
  {
    icon: Wrench,
    title: 'Delivery & Protection',
    desc: 'White-glove delivery across GTA with protection packages and aftercare.'
  },
  {
    icon: BadgeCheck,
    title: 'Trade‑In Support',
    desc: 'Fair market valuations and hassle-free trade‑in management.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-neutral-950 text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/0 via-neutral-900/20 to-black/60 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold">Full‑service auto brokerage</h2>
        <p className="mt-3 text-gray-400 max-w-2xl">From sourcing to delivery — we handle every detail so you can simply drive.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-white/20 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
