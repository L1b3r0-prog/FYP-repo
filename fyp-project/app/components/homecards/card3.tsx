import { dietaryGoals } from "../goals-cuisines/goalsconsts";
import { cuisines } from "../goals-cuisines/cuisinesconsts";

export default function Third() {
  return (
    <section className="bg-[#f8faf9] py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* ── Header ── */}
        <div className="text-center">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            What We Support
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Built for Singapore's <br />
            <span className="text-emerald-500">diverse food culture</span>
          </h2>
          <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
            From hawker centre classics to Korean BBQ — NutriTrack covers the
            foods you actually eat, with goals that fit your lifestyle.
          </p>
        </div>

        {/* ── Two Columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Dietary Goals */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-xl">🎯</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Dietary Goals</h3>
                <p className="text-xs text-gray-400">Plans tailored to your needs</p>
              </div>
            </div>
            <ul className="space-y-3">
              {dietaryGoals.map((g) => (
                <li
                  key={g.label}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50 transition-colors group"
                >
                  <span className="text-xl mt-0.5">{g.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors">
                      {g.label}
                    </p>
                    <p className="text-xs text-gray-400">{g.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Cuisines */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-xl">🍽️</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Food Cuisines</h3>
                <p className="text-xs text-gray-400">Local & international coverage</p>
              </div>
            </div>
            <ul className="space-y-3">
              {cuisines.map((c) => (
                <li
                  key={c.label}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-orange-50 transition-colors group"
                >
                  <span className="text-xl mt-0.5">{c.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                      {c.label}
                    </p>
                    <p className="text-xs text-gray-400">{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}