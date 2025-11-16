import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks — we will reach out shortly!')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please call or try again.')
    }
  }

  return (
    <section id="contact" className="relative bg-neutral-950 text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-neutral-900/20 to-neutral-900/0 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Request a quote</h2>
          <p className="mt-3 text-gray-400">Tell us what you’re looking for — model, trim, budget, and timing. We’ll follow up right away.</p>

          <form onSubmit={submit} className="mt-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full" placeholder="Full name" required />
              <input name="phone" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full" placeholder="Phone" required />
            </div>
            <input name="email" type="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full" placeholder="Email" />
            <input name="model" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full" placeholder="Desired Lexus model (e.g., RX 350 F SPORT)" />
            <textarea name="notes" rows="4" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full" placeholder="Notes (packages, colour, lease/finance, timeline)"></textarea>
            <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Send inquiry</button>
          </form>
          {status && <p className="mt-4 text-sm text-gray-300">{status}</p>}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-xl font-semibold">Serving Toronto & GTA</h3>
          <p className="mt-2 text-gray-400">Headquartered in Vaughan with concierge service across Toronto, North York, Markham, Richmond Hill, Mississauga and beyond.</p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-gray-300">
            <div>
              <p className="text-sm text-gray-400">Hours</p>
              <p>Mon–Sat: 9am–7pm</p>
              <p>Sun: By appointment</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Contact</p>
              <p>(416) 555‑0123</p>
              <p>quotes@precisionautobroker.ca</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
