import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MobileAccessories from './pages/MobileAccessories';
import Cakes from './pages/Cakes';
import Shoes from './pages/Shoes';
import CameraBooking from './pages/CameraBooking';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mobile-accessories" element={<MobileAccessories />} />
      <Route path="/cakes" element={<Cakes />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/camera-booking" element={<CameraBooking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
