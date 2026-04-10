import Footer from '../components/Footer';

function Contact() {
  const directionLink =
    'https://www.google.com/maps/place/Ghamhapur,+Uttar+Pradesh+221204/@25.4593982,82.767906,15z/data=!4m15!1m8!3m7!1s0x39902a22d3278955:0xdb9890ae5c45d105!2sPindra,+Uttar+Pradesh+221206!3b1!8m2!3d25.511849!4d82.8425216!16s%2Fg%2F1hhxp9wz1!3m5!1s0x398fd45e5cfae3fb:0xe4c5ebc0c992e345!8m2!3d25.4605528!4d82.7872919!16s%2Fg%2F12hqp9zm3?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D';

  return (
    <>
      <section className="bg-[#fffaf2] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <iframe
            title="Ghamhapur Location Map"
            src="https://maps.google.com/maps?q=25.4605528,82.7872919&z=15&output=embed"
            className="h-[330px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-4 flex justify-center">
          <a
            href={directionLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-brand-700 px-6 py-2.5 text-sm font-bold text-white shadow transition hover:bg-brand-900"
          >
            Get Directions
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-sm border border-brand-100 bg-white p-6 shadow">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-slate-500">Quick Info</p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-900">How to Reach Us</h2>
            <p className="mt-2 text-sm text-slate-600">Get in touch with us through any of these channels.</p>

            <div className="mt-6 space-y-3">
              <div className="border-l-2 border-brand-600 bg-brand-50/40 p-4">
                <h3 className="text-sm font-bold text-slate-900">Visit Our Campus</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Ghamhapur, Pindra Area<br />
                  Varanasi District, Uttar Pradesh 221204
                </p>
              </div>

              <div className="border-l-2 border-brand-600 bg-brand-50/40 p-4">
                <h3 className="text-sm font-bold text-slate-900">Call Us</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Main Office: +91 98765 43210<br />
                  Assistance: +91 91234 56789
                </p>
              </div>

              <div className="border-l-2 border-brand-600 bg-brand-50/40 p-4">
                <h3 className="text-sm font-bold text-slate-900">Email Us</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  General: support@allinonesolution.in<br />
                  Admin: admin@allinonesolution.in
                </p>
              </div>

              <div className="border-l-2 border-brand-600 bg-brand-50/40 p-4">
                <h3 className="text-sm font-bold text-slate-900">Office Hours</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Mon - Fri: 8:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-sm border-2 border-brand-600 bg-white p-6 shadow">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-slate-500">Send Message</p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-900">Write to Us</h2>
            <p className="mt-2 text-sm text-slate-600">Fill out the form and we will get back to you soon.</p>

            <form className="mt-6 space-y-3.5">
              <div>
                <label htmlFor="fullName" className="mb-1 block text-xs font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-brand-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-xs font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-brand-600"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1 block text-xs font-semibold text-slate-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone"
                  className="w-full border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-brand-600"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-1 block text-xs font-semibold text-slate-700">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-brand-600"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option>General Inquiry</option>
                  <option>Product Purchase</option>
                  <option>Bulk Order</option>
                  <option>Camera Booking</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-xs font-semibold text-slate-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full resize-y border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-brand-600"
                />
              </div>

              <button
                type="button"
                className="mt-1 w-full rounded-md bg-brand-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-900"
              >
                Send Message
              </button>
            </form>
          </article>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
