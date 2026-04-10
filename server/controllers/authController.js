const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

function buildAdminToken(user) {
  return jwt.sign({ id: user._id, email: user.email, role: 'admin' }, process.env.JWT_SECRET || 'change-me', {
    expiresIn: '1d',
  });
}

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const envAdminEmail = process.env.ADMIN_EMAIL;
    const envAdminPassword = process.env.ADMIN_PASSWORD;
    if (envAdminEmail && envAdminPassword && email === envAdminEmail && password === envAdminPassword) {
      const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET || 'change-me', {
        expiresIn: '1d',
      });
      return res.json({ token, user: { email, role: 'admin', name: 'Admin' } });
    }

    const admin = await User.findOne({ email: String(email || '').toLowerCase() });
    if (!admin || admin.role !== 'admin' || !admin.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password || '', admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = buildAdminToken(admin);
    return res.json({
      token,
      user: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: 'admin',
      },
    });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to login admin' });
  }
};
