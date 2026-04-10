import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Mobile Accessories',
    description: 'Latest chargers, earphones, covers, and smart gadgets for every mobile brand.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    accent: '#23408E',
  },
  {
    title: 'Cake Shop',
    description: 'Fresh custom cakes for birthdays, anniversaries, and celebrations with on-time delivery.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1200&q=80',
    accent: '#8D3D24',
  },
  {
    title: 'Shoes & Slippers',
    description: 'Comfortable and stylish footwear for men, women, and kids at affordable prices.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    accent: '#166643',
  },
  {
    title: 'Camera Booking for Weddings & Events',
    description: 'Professional camera coverage for weddings, parties, and memorable events.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    accent: '#4E3A94',
  },
];

function Home() {
  return (
    <>
      <HeroSection />
      <section id="services" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14 lg:px-8">
        <div className="mb-8">
          <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-900">Our Highlight Services</h2>
          <p className="mt-2 font-display text-lg text-slate-600">Everything your family needs in one trusted place.</p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 sm:p-5">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
                accent={service.accent}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
