const Booking = require('../models/Booking');

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ eventDate: 1, createdAt: -1 });
    return res.json(bookings);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch booking requests' });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    return res.status(201).json(booking);
  } catch (error) {
    return res.status(400).json({ message: 'Invalid booking data' });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    return res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to delete booking' });
  }
};
