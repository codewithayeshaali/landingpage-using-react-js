import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Categories({ categories }) {
  const titleRef = useRef();
  const itemsRef = useRef();

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
      },
    });

    gsap.from(itemsRef.current.children, {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.6,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: itemsRef.current,
        start: "top 85%",
      },
    });
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 uppercase">
      <h1
        ref={titleRef}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002D69] mb-8 sm:mb-12"
      >
        Shop By Jewelry Type
      </h1>

      <div
        ref={itemsRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 lg:gap-[34px] text-center"
      >
        {categories.map((item, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="bg-gray-100 mb-3 overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-sm sm:text-base lg:text-lg font-medium text-[#002D69]">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
