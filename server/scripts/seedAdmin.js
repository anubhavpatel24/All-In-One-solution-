const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User');

dotenv.config();

async function seedAdmin() {
  const name = process.env.SEED_ADMIN_NAME || 'Test Admin';
  const email = (process.env.SEED_ADMIN_EMAIL || 'admin@test.com').toLowerCase();
  const password = process.env.SEED_ADMIN_PASSWORD || 'Admin@123';

  await connectDB();

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await User.findOneAndUpdate(
    { email },
    {
      name,
      email,
      password: hashedPassword,
      provider: 'local',
      role: 'admin',
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

  console.log('Admin seed successful');
  console.log(`Email: ${admin.email}`);
  console.log(`Password: ${password}`);

  await mongoose.connection.close();
}

seedAdmin().catch(async (error) => {
  console.error('Admin seed failed:', error.message);
  await mongoose.connection.close();
  process.exit(1);
});
