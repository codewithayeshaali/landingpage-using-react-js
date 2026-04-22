import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Header({ navLinks, menuOpen, setMenuOpen }) {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center px-6 sm:px-6 py-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 tracking-normal leading-tight">
          BAYSIDE FINE JEWELRY
        </h1>

        <div className="ml-auto flex items-center gap-4 sm:gap-8">
          <nav className="hidden lg:flex gap-16">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-neutral-700 text-sm font-medium hover:text-blue-600 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
          <button className="relative text-[#002D69] h-9 w-9 hover:text-blue-600 ml-12 transition-colors duration-200">
            <FontAwesomeIcon
              icon={faBagShopping}
              className="text-xl cursor-pointer"
            />
          </button>
          <button
            className="lg:hidden text-[#002D69] hover:text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon
              icon={menuOpen ? faXmark : faBars}
              className="text-xl"
            />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href="#"
              className="block py-2 text-[#002D69] text-sm font-medium hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
