export default function Navbar() {
  const links = ["Home", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
      <div className="w-full px-12 lg:px-6 py-4 flex justify-between items-center">
        {/* Left corner logo */}
        <a
          href="#home"
          className="text-lg font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-500 hover:from-pink-400 hover:to-violet-500 transition-all duration-300"
        >
          RB
        </a>

        {/* Navbar links */}
        <ul className="flex gap-6 text-sm">
          {links.map((link, index) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative group text-gray-300 transition-all duration-300"
              >
                {/* Text */}
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-pink-500 transition-all duration-300">
                  {link}
                </span>

                {/* Underline hover animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-pink-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
