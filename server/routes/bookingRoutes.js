const express = require('express');
const { getBookings, createBooking, deleteBooking } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, authMiddleware.requireAdmin, getBookings);
router.post('/', createBooking);
router.delete('/:id', authMiddleware, authMiddleware.requireAdmin, deleteBooking);

module.exports = router;
