import { useState } from 'react';
import { bookingService } from '../services/bookingService';

const initialForm = {
  name: '',
  phone: '',
  eventType: '',
  eventDate: '',
  location: '',
  notes: '',
};

function BookingForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ loading: false, message: '', error: false });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: '', error: false });

    try {
      await bookingService.create(formData);

      setFormData(initialForm);
      setStatus({
        loading: false,
        message: 'Booking request submitted successfully. We will contact you soon.',
        error: false,
      });
    } catch (error) {
      setStatus({
        loading: false,
        message: 'Submission failed. Please check details and try again.',
        error: true,
      });
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-soft sm:p-8">
        <h2 className="font-heading text-3xl font-extrabold text-brand-900">Camera Booking Request</h2>
        <p className="mt-2 text-slate-600">Book your wedding or event coverage in just a few details.</p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <input className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500" placeholder="Your Name" name="name" value={formData.name} onChange={onChange} required />
          <input className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500" placeholder="Phone Number" name="phone" value={formData.phone} onChange={onChange} required />
          <input className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500" placeholder="Event Type" name="eventType" value={formData.eventType} onChange={onChange} required />
          <input className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500" type="date" name="eventDate" value={formData.eventDate} onChange={onChange} required />
          <input className="sm:col-span-2 rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500" placeholder="Event Location" name="location" value={formData.location} onChange={onChange} required />
          <textarea className="sm:col-span-2 rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-500" placeholder="Additional Notes" rows="4" name="notes" value={formData.notes} onChange={onChange} />
          <button type="submit" disabled={status.loading} className="sm:col-span-2 rounded-xl bg-brand-500 px-5 py-3 font-bold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70">
            {status.loading ? 'Submitting...' : 'Submit Booking Request'}
          </button>
        </form>

        {status.message ? (
          <p className={`mt-4 font-semibold ${status.error ? 'text-red-600' : 'text-emerald-600'}`}>
            {status.message}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default BookingForm;
