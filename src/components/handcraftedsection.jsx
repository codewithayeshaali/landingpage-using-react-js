import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HandcraftedSection() {
  const sectionRef = useRef();
  const headingRef = useRef();
  const paraRef = useRef();
  const btnRef = useRef();
  const imageRef = useRef();
  const lineRef = useRef();

  useGSAP(
    () => {
      gsap
        .timeline()
        .from(imageRef.current, {
          clipPath: "inset(0 100% 0 0)",
          duration: 1,
          ease: "power4.inOut",
        })
        .from(
          lineRef.current,
          { scaleX: 0, duration: 0.4, ease: "power2.out" },
          "-=0.2",
        )
        .from(
          headingRef.current,
          { y: 60, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.2",
        )
        .from(
          paraRef.current,
          { y: 30, opacity: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        )
        .from(
          btnRef.current,
          { scale: 0.8, opacity: 0, duration: 0.4, ease: "back.out(2)" },
          "-=0.2",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-2 font-lato"
    >
      <div className="bg-[#002D69] text-white flex flex-col justify-center px-8 sm:px-14 lg:px-24 py-14 sm:py-20">
        <div ref={lineRef} className="w-12 h-[2px] bg-white mb-6 origin-left" />
        <h3
          ref={headingRef}
          className="text-[32px] sm:text-[30px] lg:text-[54px] font-semibold leading-tight mb-4"
        >
          HAND CRAFTED
          <br />
          FINE PIECES.
        </h3>
        <p
          ref={paraRef}
          className="text-[18px] sm:text-[15px] lg:text-[28px] font-medium leading-[1.1] mb-8 max-w-[686px]"
        >
          We also firmly believed that our customers deserved more choices,
          straightforward information and legendary service.
        </p>
        <button
          ref={btnRef}
          className="border border-white bg-white text-[#002D69] rounded-[4px] w-[170px] h-[42px] text-[16px] font-semibold uppercase hover:bg-gray-100 transition-colors duration-200"
        >
          LEARN MORE
        </button>
      </div>
      <img
        ref={imageRef}
        src="src/assets/Image.png"
        className="w-full h-64 sm:h-80 md:h-full object-cover"
        style={{ clipPath: "inset(0 0% 0 0)" }}
        alt="Handcrafted jewelry"
      />
    </section>
  );
}
