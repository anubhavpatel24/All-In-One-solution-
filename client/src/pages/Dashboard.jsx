import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/admin/AdminSidebar';
import ProductCard from '../components/ProductCard';
import { productService } from '../services/productService';
import { bookingService } from '../services/bookingService';
import { formatDate, formatPrice } from '../utils/helpers';

const initialProduct = {
  name: '',
  category: 'Mobile Accessories',
  price: '',
  stock: '',
  description: '',
  imageUrl: '',
};

const fieldClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200/50';

function Dashboard() {
  const { token, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [productForm, setProductForm] = useState(initialProduct);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      navigate('/admin-login');
      return;
    }

    Promise.all([productService.getAll(), bookingService.getAll(token)])
      .then(([productData, bookingData]) => {
        setProducts(productData);
        setBookings(bookingData);
      })
      .catch(() => setStatus('Failed to load dashboard data'));
  }, [isAuthenticated, isAdmin, navigate, token]);

  const refreshProducts = () => {
    productService.getAll().then(setProducts).catch(() => setStatus('Failed to refresh products'));
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setProductForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    setStatus('Uploading image...');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/upload`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Upload failed');

      setProductForm((prev) => ({ ...prev, imageUrl: data.imageUrl }));
      setStatus('Image uploaded, ready to save');
    } catch {
      setStatus('Image upload failed');
    }
  };

  const generateDescription = () => {
    const { name, category } = productForm;
    if (!name || !category) {
      setStatus('Please enter a product name to generate description.');
      return;
    }

    let generatedDesc = '';
    const lowerName = name.toLowerCase();

    if (category === 'Mobile Accessories') {
      generatedDesc = `Enhance your digital lifestyle with our premium ${name}. Designed for optimal performance and durability, this accessory is a must-have for your device. It offers seamless compatibility, sleek aesthetics, and is crafted using high-quality materials to ensure long-lasting reliability.`;
      
      if (lowerName.includes('case') || lowerName.includes('cover')) {
         generatedDesc = `Protect your device in style with the ${name}. Featuring a slim profile, shock-absorbent design, and an elegant finish, it provides superior defense against drops and scratches while keeping your phone looking fresh.`;
      } else if (lowerName.includes('charger') || lowerName.includes('cable') || lowerName.includes('adapter')) {
         generatedDesc = `Experience lightning-fast power delivery with the ${name}. Engineered for safety and speed, it ensures your devices are always charged and ready to go. Built with reinforced joints for extra durability.`;
      } else if (lowerName.includes('glass') || lowerName.includes('screen')) {
         generatedDesc = `Shield your screen with the ultimate ${name}. With 9H hardness and edge-to-edge protection, it guards against scratches and cracks without compromising touch sensitivity or display clarity.`;
      }
    } else if (category === 'Cake Shop') {
      generatedDesc = `Indulge in the sweetness of our freshly baked ${name}. Crafted with premium ingredients, love, and perfection, it offers a melt-in-your-mouth experience. Whether it's a celebration or a midnight craving, this delightful treat is guaranteed to bring a smile to your face.`;
      
      if (lowerName.includes('chocolate') || lowerName.includes('truffle') || lowerName.includes('forest')) {
         generatedDesc = `Dive into rich, decadent flavors with our ${name}. Made with pure, high-quality cocoa, this cake is an absolute paradise for chocolate lovers. Moist, rich, and perfectly balanced, making every bite unforgettable.`;
      } else if (lowerName.includes('fruit') || lowerName.includes('pineapple') || lowerName.includes('mango') || lowerName.includes('strawberry')) {
         generatedDesc = `Experience the refreshing taste of our ${name}. Layered with fresh, juicy fruits and soft sponge, it's a light and airy dessert perfect for any festive occasion. 100% vegetarian and baked fresh daily.`;
      }
    } else if (category === 'Shoes & Slippers') {
      generatedDesc = `Step out in comfort and style with our ${name}. Expertly designed for the modern trendsetter, these offer an impeccable blend of fashion and functionality. With a cushioned footbed, durable outsole, and a versatile look, they are perfect for your daily adventures.`;
      
      if (lowerName.includes('sneaker') || lowerName.includes('sport') || lowerName.includes('running')) {
         generatedDesc = `Elevate your active lifestyle with the ${name}. Built with breathable materials and an ergonomic shock-absorbing sole, they provide ultimate support and traction whether you're hitting the gym or the streets.`;
      } else if (lowerName.includes('slipper') || lowerName.includes('slide') || lowerName.includes('flip')) {
         generatedDesc = `Experience ultimate relaxation with our ${name}. Lightweight, slip-resistant, and super comfortable, these are ideal for lounging at home or casual neighborhood walks. Featuring a contoured footbed for all-day ease.`;
      } else if (lowerName.includes('formal') || lowerName.includes('leather')) {
         generatedDesc = `Make a lasting impression with the elegant ${name}. Crafted from premium materials with exquisite detailing, these deliver a sophisticated look suitable for office wear and formal gatherings.`;
      }
    } else {
      generatedDesc = `Experience the best with our high-quality ${name}. Tailored to meet your needs, it offers exceptional value, remarkable durability, and outstanding performance.`;
    }

    setProductForm((prev) => ({ ...prev, description: generatedDesc }));
    setStatus('✨ Magic Description generated successfully!');
    
    // Clear status after 3 seconds
    setTimeout(() => {
      setStatus('');
    }, 3000);
  };

  const saveProduct = async (event) => {
    event.preventDefault();
    setStatus('Saving product...');
    try {
      await productService.create(
        {
          ...productForm,
          price: Number(productForm.price),
          stock: Number(productForm.stock || 0),
        },
        token
      );
      setProductForm(initialProduct);
      setStatus('Product saved');
      refreshProducts();
    } catch {
      setStatus('Failed to save product');
    }
  };

  const deleteProduct = async (id) => {
    try {
      await productService.remove(id, token);
      setStatus('Product deleted');
      refreshProducts();
    } catch {
      setStatus('Failed to delete product');
    }
  };

  const deleteBookingReq = async (id) => {
    try {
      await bookingService.remove(id, token);
      setStatus('Booking deleted');
      bookingService.getAll(token).then(setBookings);
    } catch {
      setStatus('Failed to delete booking');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin-login');
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0b0f14] lg:flex-row">
      <AdminSidebar onLogout={handleLogout} />

      <div className="flex flex-1 flex-col overflow-auto bg-slate-100">
        <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-slate-200/80 bg-white/90 px-4 py-4 backdrop-blur-md sm:px-8">
          <div>
            <h1 className="font-heading text-xl font-bold text-ink sm:text-2xl">Dashboard</h1>
            <p className="text-sm font-medium text-slate-500">Products, stock, and camera bookings</p>
          </div>
          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
            onClick={handleLogout}
          >
            Log out
          </button>
        </header>

        <div className="flex-1 space-y-8 p-4 sm:p-8">
          {status ? (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${status.includes('Failed')
                ? 'border-red-200 bg-red-50 text-red-800'
                : 'border-brand-200 bg-brand-50 text-brand-900'
                }`}
            >
              {status}
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-card">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Products</p>
              <p className="mt-2 font-heading text-3xl font-bold text-ink">{products.length}</p>
              <p className="mt-1 text-sm font-medium text-slate-500">Listed in catalogue</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-card">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Bookings</p>
              <p className="mt-2 font-heading text-3xl font-bold text-ink">{bookings.length}</p>
              <p className="mt-1 text-sm font-medium text-slate-500">Camera requests</p>
            </div>
            <div className="rounded-2xl border border-brand-700 bg-gradient-to-br from-brand-500 to-brand-700 p-5 text-white shadow-soft sm:col-span-1">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-100/90">Quick tip</p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-white/90">
                Delete duplicates from the list to keep the storefront clean for customers.
              </p>
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card sm:p-8">
              <h2 className="font-heading text-lg font-bold text-ink">Add product</h2>
              <p className="mt-1 text-sm text-slate-500">New items appear in the public shop grids after save.</p>
              <form onSubmit={saveProduct} className="mt-6 space-y-3">
                <input className={fieldClass} name="name" value={productForm.name} onChange={onChange} placeholder="Product name" required />
                <select className={`${fieldClass} cursor-pointer`} name="category" value={productForm.category} onChange={onChange}>
                  <option>Mobile Accessories</option>
                  <option>Cake Shop</option>
                  <option>Shoes & Slippers</option>
                </select>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    className={fieldClass}
                    name="price"
                    type="number"
                    min="0"
                    value={productForm.price}
                    onChange={onChange}
                    placeholder="Price (₹)"
                    required
                  />
                  <input
                    className={fieldClass}
                    name="stock"
                    type="number"
                    min="0"
                    value={productForm.stock}
                    onChange={onChange}
                    placeholder="Stock"
                  />
                </div>
                <div className="relative">
                  <textarea
                    className={`${fieldClass} pr-32`}
                    name="description"
                    rows="4"
                    value={productForm.description}
                    onChange={onChange}
                    placeholder="Description"
                  />
                  <button
                    type="button"
                    onClick={generateDescription}
                    className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-600 transition hover:bg-indigo-100 hover:text-indigo-700"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Auto-Write
                  </button>
                </div>
                <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Product Image</p>
                  <label className="text-sm font-medium text-slate-600">Upload from gallery:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="text-sm file:mr-4 file:rounded-full file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-700 hover:file:bg-brand-100"
                  />
                  <span className="text-xs font-bold uppercase text-slate-400">OR Provide Link</span>
                  <input
                    className={fieldClass}
                    name="imageUrl"
                    value={productForm.imageUrl}
                    onChange={onChange}
                    placeholder="Paste Image URL"
                  />
                  {productForm.imageUrl && (
                    <img src={productForm.imageUrl} alt="Preview" className="mt-2 h-20 w-20 rounded-md object-cover border border-slate-200" />
                  )}
                </div>
                <button
                  className="w-full rounded-2xl bg-brand-500 py-3 text-sm font-bold text-white shadow-md transition hover:bg-brand-600 sm:w-auto sm:px-8"
                  type="submit"
                >
                  Save product
                </button>
              </form>
            </div>

            <div className="rounded-2xl border border-brand-100 bg-white p-6">
              <h2 className="font-heading text-xl font-bold text-brand-700">Product List</h2>
              <div className="mt-4 space-y-3">
                {products.length === 0 && <p className="text-sm text-slate-500 italic">No products added yet.</p>}
                {products.map((product) => (
                  <article key={product._id} className="flex items-center gap-4 rounded-xl border border-slate-200 p-4">
                    {product.imageUrl && (
                      <img src={product.imageUrl} alt={product.name} className="h-16 w-16 rounded-md object-cover border border-slate-200" />
                    )}
                    <div className="flex-1">
                      <p className="font-bold">{product.name}</p>
                      <p className="text-sm text-slate-600">{product.category}</p>
                      <p className="text-sm text-slate-600">{formatPrice(product.price)} | Stock: {product.stock}</p>
                    </div>
                    <button className="rounded-md border border-red-300 px-3 py-1 text-sm text-red-600 transition hover:bg-red-50" type="button" onClick={() => deleteProduct(product._id)}>
                      Delete
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-brand-100 bg-white p-6">
            <h2 className="font-heading text-xl font-bold text-brand-700">Camera Booking Requests</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {bookings.map((booking) => (
                <article key={booking._id} className="flex items-start justify-between rounded-xl border border-slate-200 p-4">
                  <div>
                    <p className="font-bold">{booking.name}</p>
                    <p className="text-sm text-slate-600">{booking.phone}</p>
                    <p className="text-sm text-slate-600">{booking.eventType} | {formatDate(booking.eventDate)}</p>
                    <p className="text-sm text-slate-600">{booking.location}</p>
                  </div>
                  <button className="rounded-md border border-red-300 px-3 py-1 text-sm text-red-600 transition hover:bg-red-50" type="button" onClick={() => deleteBookingReq(booking._id)}>
                    Delete
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
