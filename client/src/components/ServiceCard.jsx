function ServiceCard({ title, description, image, accent }) {
  return (
    <article className="group overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white"
          style={{ backgroundColor: accent }}
        >
          Featured
        </span>
      </div>
      <div className="space-y-3 p-5 sm:p-6">
        <h3 className="font-heading text-[1.6rem] font-extrabold leading-tight text-slate-900 sm:text-[1.8rem]">
          {title}
        </h3>
        <p className="font-display text-base leading-relaxed text-slate-700">{description}</p>
      </div>
    </article>
  );
}

export default ServiceCard;
