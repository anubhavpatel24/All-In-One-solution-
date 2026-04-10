import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <section className="bg-brand-700 py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="font-heading text-xl font-extrabold">Have Questions About Orders?</p>
            <p className="text-sm text-brand-100">Our team is here to help you every step of the way.</p>
          </div>
          <a
            href="tel:+919876543210"
            className="rounded-md bg-white px-4 py-2 text-sm font-bold text-brand-700 transition hover:bg-brand-50"
          >
            Call Now
          </a>
        </div>
      </section>

      <footer className="bg-brand-900 py-10 text-brand-100">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <h3 className="font-heading text-xl font-extrabold text-white">All In One Solution</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-100">
              A trusted local business for mobile accessories, cakes, footwear, and camera booking services.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-brand-100">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/mobile-accessories" className="transition hover:text-white">
                  Mobile Accessories
                </Link>
              </li>
              <li>
                <Link to="/cakes" className="transition hover:text-white">
                  Cakes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-white">Contact</h4>
            <div className="mt-3 space-y-2 text-sm text-brand-100">
              <p>Ghamhapur, Pindra, Varanasi, Uttar Pradesh 221204</p>
              <p>+91 98765 43210</p>
              <p>support@allinonesolution.in</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between border-t border-brand-700 px-4 py-4 text-xs text-brand-200 sm:px-6 lg:px-8">
          <div>
            <span>Created by </span>
            <a href="https://anubhav.cv" target="_blank" rel="noreferrer" className="text-brand-100 hover:text-white">
              Anubhav Kumar Patel
            </a>
          </div>
          <Link to="/admin-login" className="font-semibold text-brand-100 transition hover:text-white">Admin Login</Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
