import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { productService } from '../services/productService';

function MobileAccessories() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then((data) => {
      setProducts(data.filter((p) => p.category === 'Mobile Accessories'));
    });
  }, []);

  return (
    <div className="bg-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="mb-3 inline-block rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow">
            📱 Mobile Accessories
          </span>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Gadgets & Mobile Accessories
          </h1>
          <p className="mt-2 font-display text-base text-slate-600">
            Top-rated earphones, chargers, covers & smart gadgets — {products.length} products available.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((p) => (
            <ProductCard
              key={p._id}
              name={p.name}
              description={p.description}
              price={p.price}
              image={p.imageUrl || 'https://placehold.co/400x400/eeeeee/999999?text=No+Image'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileAccessories;
