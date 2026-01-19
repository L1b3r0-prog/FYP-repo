import { ChevronUpIcon } from "@heroicons/react/24/outline";

export default function Backtotop() {
  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-50 right-8 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Back to top"
    >
      <ChevronUpIcon className="w-6 h-6" />
    </button>
  );
}