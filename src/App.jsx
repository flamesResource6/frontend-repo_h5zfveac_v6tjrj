import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Contact />

      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400">© {new Date().getFullYear()} Precision Auto Brokerage — Vaughan, Ontario</p>
          <div className="text-gray-500 text-sm">
            Lexus and model names are trademarks of their respective owners. We are an independent auto brokerage serving Toronto & GTA.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
