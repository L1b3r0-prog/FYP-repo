import type { Testimonial } from "./testimonialsData";

export default function TestimonialCard({ name, role, text, avatar }: Testimonial) {
    return (
        <div className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>

            {/* Quote */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">"{text}"</p>

            {/* Avatar + name */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {avatar}
                </div>
                <div>
                    <p className="font-semibold text-gray-900 text-sm">{name}</p>
                    <p className="text-gray-400 text-xs">{role}</p>
                </div>
            </div>
        </div>
    );
}