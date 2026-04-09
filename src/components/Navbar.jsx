import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        {/* Left corner logo */}
        <a
          href="#home"
          className="text-lg font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-500 hover:from-pink-400 hover:to-violet-500 transition-all duration-300"
        >
          RB
        </a>

        {/* Desktop nav links */}
        <ul className="hidden sm:flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative group text-gray-300 transition-all duration-300"
              >
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-pink-500 transition-all duration-300">
                  {link}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-pink-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className="sm:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden px-6 pb-4 flex flex-col gap-4 bg-black/80 backdrop-blur-md border-t border-white/10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet-400 hover:to-pink-500 transition-all duration-300 py-1 text-sm"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
