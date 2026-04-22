import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reviews({ reviews }) {
  const textRefs = useRef([]);
  textRefs.current = [];

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useGSAP(() => {
    textRefs.current.forEach((el) => {
      const text = el.innerText;
      el.innerText = "";

      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.opacity = "0";
        el.appendChild(span);
      });
      gsap.to(el.children, {
        opacity: 1,
        stagger: 0.02,
        duration: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 font-sans">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002D69] mb-8 sm:mb-12 uppercase">
        Customer Reviews
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="border border-gray-200 pt-5 pl-5 pr-5 text-center relative bg-white"
          >
            <span className="absolute top-4 left-6 text-5xl text-[#002D69] leading-none">
              "
            </span>

            <p
              ref={addToRefs}
              className="text-base sm:text-[18px] text-neutral-700 italic leading-snug mt-6 mb-8"
            >
              {review.text}
            </p>

            <p className="text-base sm:text-[18px] italic text-black pb-4">
              - {review.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}