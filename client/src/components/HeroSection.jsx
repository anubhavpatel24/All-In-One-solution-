const quickHighlights = [
  { label: 'Mobile Accessories', tone: 'bg-blue-50 text-blue-700 border-blue-100' },
  { label: 'Fresh Cakes', tone: 'bg-amber-50 text-amber-700 border-amber-100' },
  { label: 'Shoes and Slippers', tone: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
  { label: 'Camera Booking', tone: 'bg-rose-50 text-rose-700 border-rose-100' },
];

const trustStats = [
  { value: '4', label: 'Core Services' },
  { value: '100%', label: 'Local Support' },
  { value: 'Daily', label: 'Service Availability' },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(217,119,6,0.2),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(146,64,14,0.18),_transparent_42%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:py-16 lg:px-8">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-sm font-bold text-brand-700">Welcome to</p>
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-brand-900 sm:text-5xl">All In One Solution</h1>
          <p className="max-w-xl text-lg font-semibold leading-relaxed text-slate-700">
            Your One Stop Shop for Mobile Accessories, Cakes, Footwear & Event Camera Booking
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#services" className="inline-block rounded-full bg-brand-500 px-6 py-3 font-bold text-white shadow-soft transition hover:bg-brand-700">
              Explore Services
            </a>
            <a href="/contact" className="inline-block rounded-full border border-brand-200 bg-white px-6 py-3 font-bold text-brand-700 transition hover:border-brand-400 hover:text-brand-900">
              Contact Us
            </a>
          </div>

          <div className="grid max-w-xl gap-3 sm:grid-cols-3">
            {trustStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
                <p className="font-heading text-xl font-extrabold text-brand-900">{item.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-[24rem]">
          <div className="rounded-[2rem] border border-brand-100 bg-white p-5 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-500">Why Choose Us</p>
            <h2 className="mt-2 font-heading text-2xl font-extrabold text-brand-900">Fast service, trusted quality</h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
              Har category me curated products aur local support ke sath simple and reliable service experience.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {quickHighlights.map((item) => (
                <div key={item.label} className={`rounded-xl border px-3 py-2 text-sm font-semibold ${item.tone}`}>
                  {item.label}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-brand-900 px-4 py-3 text-brand-50">
              <p className="text-xs font-bold uppercase tracking-[0.14em]">Local Trust</p>
              <p className="mt-1 text-sm font-medium">One place for shopping, celebration, and event coverage needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
