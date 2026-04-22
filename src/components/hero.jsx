import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Hero() {
  const heroRef = useRef();

  useGSAP(() => {
    gsap.from(heroRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

  return (
    <section className="relative w-full h-[50vh] sm:h-[70vh] md:h-screen overflow-hidden">
      <img
        ref={heroRef}
        src="src/assets/Hero.png"
        alt="Jewelry hero"
        className="w-full h-full object-cover"
      />
    </section>
  );
}