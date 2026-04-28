function ServiceCard({ title, description, imageSrc, accent, badge = 'Featured' }) {
  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          src={imageSrc}
          alt={title}
          loading="eager"
          draggable="false"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent" />

        <div
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-sm"
          style={{ backgroundColor: accent }}
        >
          {badge}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
          <div className="max-w-[75%]">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/75">Featured visual</p>
            <h3 className="mt-1 font-heading text-2xl font-extrabold leading-tight drop-shadow sm:text-[2rem]">
              {title}
            </h3>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-[0.7rem] font-black uppercase tracking-[0.12em] text-white backdrop-blur-md shadow-lg">
            ✦
          </div>
        </div>
      </div>

      <div className="space-y-3 p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: accent }}>
          Premium service
        </p>
        <p className="font-display text-base leading-relaxed text-slate-700">{description}</p>
      </div>
    </article>
  );
}

export default ServiceCard;
