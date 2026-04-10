import { formatPrice } from '../utils/helpers';

/* ─── Admin-style plain card (used by Dashboard & category pages) ─── */
function ProductCard({ product, name, description, price, image, badge, badgeColor, originalPrice }) {
  // Support both legacy {product} prop and flat props for the shop cards
  if (product) {
    return (
      <article className="rounded-xl border border-slate-200 bg-white p-4">
        {product.imageUrl && (
          <img src={product.imageUrl} alt={product.name} className="mb-3 h-40 w-full rounded-lg object-cover" />
        )}
        <h3 className="font-heading text-lg font-bold text-slate-800">{product.name}</h3>
        <p className="text-sm text-slate-500">{product.category}</p>
        <p className="mt-1 text-sm text-slate-700">{formatPrice(product.price)}</p>
        <p className="text-sm text-slate-600">Stock: {product.stock}</p>
        {product.description ? <p className="mt-2 text-sm text-slate-500">{product.description}</p> : null}
      </article>
    );
  }

  /* ─── Shop card with image (used on homepage/category pages) ─── */
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer">
      <div className="relative h-44 overflow-hidden bg-slate-50">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {badge && (
          <span
            className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-widest text-white shadow-lg"
            style={{ backgroundColor: badgeColor || '#d97706' }}
          >
            {badge}
          </span>
        )}
        {originalPrice && (
          <span className="absolute right-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-[0.62rem] font-bold text-white shadow">
            SALE
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h4 className="font-heading text-sm font-extrabold leading-snug text-slate-900 line-clamp-2">{name}</h4>
        <p className="mt-1 flex-1 text-xs leading-relaxed text-slate-500 line-clamp-2">{description}</p>
        <div className="mt-3">
          <span className="font-heading text-base font-extrabold text-amber-600">
            ₹{(price || 0).toLocaleString('en-IN')}
          </span>
          {originalPrice && (
            <div className="text-[0.65rem] text-slate-400 line-through">
              ₹{originalPrice.toLocaleString('en-IN')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
