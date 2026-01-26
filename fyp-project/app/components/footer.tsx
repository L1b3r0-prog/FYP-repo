export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-300 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-white">
          <a href="/" className="hover:text-green-500 transition-colors">
            Home
          </a>
          <a href="/team" className="hover:text-green-500 transition-colors">
            Team
          </a>
          <a href="/privacy" className="hover:text-green-500 transition-colors">
            Privacy Policy
          </a>
          <a href="/tos" className="hover:text-green-500 transition-colors">
            Terms of Service
          </a>
        </div>
        
        {/* Optional: Add copyright/text below */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} NutriTrack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}