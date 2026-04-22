import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Icon from "../assets/svgviewer-output.svg?react";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
const headerRef = useRef();
const [menuOpen, setMenuOpen] = useState(false);
const navLinks = ["Home", "Shop", "Services", "About", "Contact"];
useGSAP(() => {
  gsap.from(headerRef.current, {
    y: -30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });
});
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50" ref={headerRef} >
      
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4">
        
        <h1 className="text-sm sm:text-xl md:text-3xl lg:text-4xl font-bold text-[#0D5EBA]">
          BAYSIDE FINE JEWELRY
        </h1>

        <div className="ml-auto flex items-center gap-4 sm:gap-8">

          <nav className="hidden lg:flex gap-16">
            {navLinks.map((link, i) => (
              <a key={i} href="#" className="text-neutral-700 text-sm hover:text-blue-600">
                {link}
              </a>
            ))}
          </nav>
          <button className="ml-12">
              <Icon className="w-6 h-6 text-blue-600" />
            
          </button>

          <button
            className="lg:hidden text-[#002D69]"
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
        <div className="lg:hidden bg-white border-t px-4 pb-4">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href="#"
              className="block py-2 text-sm hover:text-blue-600"
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


