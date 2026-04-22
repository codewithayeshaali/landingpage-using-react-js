import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYelp } from "react-icons/fa";

export default function Footer() {
  const imgRef = useRef();
  const btnRef = useRef();
  const iconsRef = useRef([]);
  iconsRef.current = [];

  const addIconRef = (el) => {
    if (el && !iconsRef.current.includes(el)) {
      iconsRef.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.from(imgRef.current, {
      opacity: 0,
      scale: 1.1,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(btnRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(btnRef.current, {
      boxShadow: "0px 0px 18px rgba(0,45,105,0.4)",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });
    iconsRef.current.forEach((icon) => {
      gsap.to(icon, {
        scale: 1.15,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      });
    });
  });

  return (
    <footer className="bg-sky-200 w-full">
      <section className="py-16 sm:py-22 px-4 sm:px-10 lg:px-[124px]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white overflow-hidden">
          <img
            ref={imgRef}
            src="src/assets/Rectangle 31.png"
            className="w-full md:w-1/2 h-60 md:h-auto object-cover"
            alt="Ring"
          />

          <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 sm:px-10 py-8 text-center">
            <h3 className="shine-text text-2xl sm:text-3xl md:text-4xl font-bold text-[#002D69] mb-3">
              STAY IN TOUCH?
            </h3>

            <p className="text-sm sm:text-lg md:text-xl text-neutral-700 mb-6">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>

            <button
              ref={btnRef}
              className="bg-[#002D69] text-white text-xs tracking-normal rounded-sm uppercase px-8 py-3 hover:bg-blue-900 transition-colors"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
      <div className="w-full mb-10 px-4 sm:px-10 lg:pl-[124px]">
        <div className="flex flex-row gap-10 lg:gap-41 justify-start">
          {[
            ["Product", ["Privacy Policy", "Terms of Service", "FAQ"]],
            ["Resources", ["Documentation", "Case Studies"]],
            ["Company", ["About Us", "Contact Us"]],
          ].map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm sm:text-base font-bold text-neutral-700 mb-4">
                {title}
              </h4>

              {links.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="block text-xs sm:text-sm text-zinc-600 font-bold hover:text-blue-700 mb-3"
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:pl-[124px] px-4 sm:px-10 flex flex-col sm:flex-row justify-between items-center border-t border-sky-300 pt-5 pb-6">
        <p className="text-sm sm:text-base font-bold text-zinc-600">
          © Blue Diamond Jewelry™ 2021
        </p>

        <div className="flex gap-3">
          {[FaFacebookF, FaInstagram, FaPinterestP, FaYelp].map((Icon, i) => (
            <a
              key={i}
              ref={addIconRef}
              href="#"
              className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-full hover:bg-blue-700 transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
