import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition ${isActive ? 'text-brand-700' : 'text-slate-600 hover:text-brand-700'}`;

  return (
    <header className="sticky top-0 z-30 border-b border-brand-100/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="min-w-fit leading-none">
          <p className="font-heading text-lg font-extrabold tracking-tight text-brand-900 sm:text-2xl whitespace-nowrap">
            All In One Solution
          </p>
          <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand-700 sm:text-xs sm:tracking-[0.18em]">
            Trusted Local Business
          </p>
        </NavLink>
        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4">
          <NavLink to="/mobile-accessories" className={linkClass}>
            Mobile
          </NavLink>
          <NavLink to="/cakes" className={linkClass}>
            Cakes
          </NavLink>
          <NavLink to="/shoes" className={linkClass}>
            Shoes
          </NavLink>
          <NavLink to="/camera-booking" className={linkClass}>
            Booking
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
