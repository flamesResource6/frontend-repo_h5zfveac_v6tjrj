import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Consult',
    copy: 'We define your ideal Lexus: model, trim, options, budget, and timeline.'
  },
  {
    title: 'Source',
    copy: 'We tap our dealer network across Toronto & GTA to locate the perfect match.'
  },
  {
    title: 'Negotiate',
    copy: 'We secure best‑possible pricing, incentives, and finance/lease terms.'
  },
  {
    title: 'Deliver',
    copy: 'Seamless paperwork and white‑glove delivery to your door.'
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold">A clear, hassle‑free process</h2>
        <p className="mt-3 text-gray-400 max-w-2xl">Built around busy GTA professionals who value time, transparency, and results.</p>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="text-6xl font-black leading-none text-white/10">{String(i+1).padStart(2, '0')}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-400">{s.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
