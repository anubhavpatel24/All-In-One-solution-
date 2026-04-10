const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, default: '' },
    googleId: { type: String, default: '' },
    picture: { type: String, default: '' },
    provider: { type: String, default: 'local', enum: ['local', 'google'] },
    role: { type: String, default: 'customer', enum: ['admin', 'customer'] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
