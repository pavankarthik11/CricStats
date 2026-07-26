function StatCard({ title, value }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-500">

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

      {/* Value */}
      <div className="text-center mt-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
          {value}
        </h2>

        <p className="mt-2 text-sm md:text-base font-semibold uppercase tracking-wide text-slate-500">
          {title}
        </p>
      </div>

    </div>
  );
}

export default StatCard;