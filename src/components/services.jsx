import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services({ services }) {
  const titleRef = useRef();
  const cardsRef = useRef([]);
  cardsRef.current = [];
  const btnRef = useRef();

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      // repeat: -1,
      //   repeatDelay: 4,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
      },
    });

    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        rotate: -3,
        scale: 0.95,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out",
        // repeat: -1,
        // repeatDelay: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      });
    });
    gsap.to(btnRef.current, {
      scale: 1.06,
      boxShadow: "0px 0px 20px rgba(0,45,105,0.4)",
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:py-14">
      <h1
        ref={titleRef}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002D69] mb-8 sm:mb-12 uppercase"
      >
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((item, i) => (
          <div
            key={i}
            ref={addCardRef}
            className="group cursor-pointer"
          >
            <div className="bg-gray-100 mb-3 overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-lg sm:text-2xl text-center font-medium text-[#002D69] uppercase">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          ref={btnRef}
          className="bg-[#002D69] text-white text-sm font-medium rounded-sm tracking-widest uppercase px-8 py-3 hover:bg-blue-800 transition-colors"
        >
          Learn More
        </button>
      </div>

    </section>
  );
}