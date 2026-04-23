import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services({ services }) {
  const sectionRef = useRef();

  useGSAP(
    () => {
      gsap.from(".service-title", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".service-title", start: "top 85%" },
      });

      gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.6,
        stagger: { each: 0.15, ease: "power1.in" },
        ease: "power3.out",
        scrollTrigger: { trigger: ".service-card", start: "top 85%" },
      });

      gsap.from(".service-btn", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "back.out(2)",
        scrollTrigger: { trigger: ".service-btn", start: "top 90%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 p-10 sm:py-14"
    >
      <h1 className="service-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#002D69] tracking-normal leading-tight mb-8 sm:mb-12 uppercase">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((item, i) => (
          <div key={i} className="service-card group cursor-pointer">
            <div className="bg-gray-100 mb-3 overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-lg sm:text-2xl text-center font-medium tracking-normal text-[#002D69] uppercase">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="service-btn bg-[#002D69] text-white text-sm font-medium rounded-sm tracking-widest uppercase px-8 py-3 hover:bg-blue-800 transition-colors duration-200">
          Learn More
        </button>
      </div>
    </section>
  );
}
