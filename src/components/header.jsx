import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Icon from "../assets/svgviewer-output.svg?react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
  const headerRef = useRef();
  const shimmerRef = useRef();
  const navRef = useRef([]);
  const iconRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Shop", "Services", "About", "Contact"];

  useGSAP(
    () => {
      gsap
        .timeline()
        .from(headerRef.current, {
          y: -40,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
        })
        .to(
          shimmerRef.current,
          { x: 400, duration: 0.7, ease: "power2.inOut" },
          "+=0.1",
        )
        .from(
          navRef.current,
          { y: -28, opacity: 0, stagger: 0.08, ease: "back.out(1.8)" },
          "-=0.3",
        )
        .from(
          iconRef.current,
          { scale: 0, opacity: 0, duration: 0.5, ease: "elastic.out(1,0.5)" },
          "-=0.1",
        );
    },
    { scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className="w-full bg-white shadow-sm sticky top-0 z-50 overflow-hidden"
    >
      <div
        ref={shimmerRef}
        style={{
          position: "absolute",
          top: 0,
          left: "-60px",
          width: "40px",
          height: "100%",
          background:
            "linear-gradient(90deg,transparent,rgba(255,255,255,0.75),transparent)",
          transform: "skewX(-20deg)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      <div className="max-w-7xl mx-auto flex items-center px-6 py-4">
        <h1 className="text-sm sm:text-xl md:text-3xl lg:text-4xl font-bold text-[#0D5EBA]">
          BAYSIDE FINE JEWELRY
        </h1>

        <div className="ml-auto flex items-center gap-4 sm:gap-8">
          <nav className="hidden lg:flex gap-16">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href="#"
                ref={(el) => (navRef.current[i] = el)}
                className="text-neutral-700 text-sm hover:text-blue-600"
              >
                {link}
              </a>
            ))}
          </nav>

          <button className="ml-12" ref={iconRef}>
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
