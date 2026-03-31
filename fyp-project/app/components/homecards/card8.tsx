import { useState } from "react";
import { faqs } from "../faq/faqs";


export default function Eighth() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) =>
    setOpenIndex(prev => (prev === key ? null : key));

  return (
    <section className="bg-green-50 py-20 px-4 font-sans">
      <div className="max-w-3xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            FAQs
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ── FAQ Groups ── */}
        <div className="space-y-10">
          {faqs.map((group) => (
            <div key={group.category}>

              {/* Category label */}
              <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3 ml-1">
                {group.category}
              </h3>

              {/* Items */}
              <div className="space-y-2">
                {group.items.map((item, i) => {
                  const key = `${group.category}-${i}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={key}
                      className={`border rounded-2xl overflow-hidden transition-all ${
                        isOpen
                          ? "border-emerald-200 bg-emerald-50"
                          : "border-gray-100 bg-[#f8faf9] hover:border-gray-200"
                      }`}
                    >
                      {/* Question */}
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left"
                      >
                        <span className={`text-sm font-semibold ${isOpen ? "text-emerald-700" : "text-gray-800"}`}>
                          {item.q}
                        </span>
                        <span className={`ml-4 text-lg font-bold transition-transform ${isOpen ? "rotate-45 text-emerald-500" : "text-gray-400"}`}>
                          +
                        </span>
                      </button>

                      {/* Answer */}
                      {isOpen && (
                        <div className="px-5 pb-4">
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}