import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%] z-50 
      bg-white/20 backdrop-blur-xl border border-white/30 
      shadow-lg rounded-2xl">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg md:text-xl font-extrabold tracking-tight text-black drop-shadow-sm"
        >
          Chetturu Khaleel
        </Link>

        {/* Links */}
        <ul className="flex gap-6 md:gap-10 text-sm md:text-base font-medium">
          {["about", "projects", "contact"].map((page) => (
            <li key={page}>
              <Link
                to={`/${page}`}
                className="group relative text-black hover:text-yellow-500 transition-colors"
              >
                <span className="capitalize">{page}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
