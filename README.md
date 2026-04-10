# All In One Solution - MERN Project

This project includes a React + Tailwind frontend and Node.js + Express + MongoDB backend.

## Brand Setup Included

- Navbar brand name: **All In One Solution**
- Hero brand name: **All In One Solution**
- Tagline:
  **Your One Stop Shop for Mobile Accessories, Cakes, Footwear & Event Camera Booking**
- Hero owner photo section
- Service cards for:
  - Mobile Accessories
  - Cake Shop
  - Shoes & Slippers
  - Camera Booking for Weddings & Events

## Admin Features Included

- Manage products (add, list, delete)
- View camera booking requests

## Run Backend

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

## Run Frontend

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

Frontend runs at Vite default URL and consumes backend API from `VITE_API_BASE_URL`.
