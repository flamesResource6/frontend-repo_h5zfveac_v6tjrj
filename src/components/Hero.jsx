import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-24 grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Lexus acquisition, made effortless.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            Trusted auto brokerage in Vaughan serving the Greater Toronto Area. We source, negotiate, and deliver high-spec Lexus models with transparent pricing and white‑glove service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Request a quote</a>
            <a href="#services" className="px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors">Explore services</a>
          </motion.div>
        </div>

        <div className="md:col-span-5 md:justify-self-end text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md"
          >
            <p className="text-sm text-gray-300">Toronto • Ontario</p>
            <p className="text-2xl font-semibold">Lexus specialists</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
