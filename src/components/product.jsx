import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Products({ products }) {
  const titleRef = useRef();
  const imagesRef = useRef([]);
  imagesRef.current = [];
  const btnRef = useRef();

  const addImageRef = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

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

 
    imagesRef.current.forEach((img, i) => {
      gsap.from(img, {
        opacity: 0,
        scale: 1.2,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
        },
      });
    });

  
    gsap.to(btnRef.current, {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:py-14">

  
      <h1
        ref={titleRef}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002D69] mb-8 sm:mb-12 uppercase"
      >
        Our Latest Jewelry
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((item, i) => (
          <div key={item.id} className="overflow-hidden">
            <img
              ref={addImageRef}
              src={item.img}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              alt=""
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          ref={btnRef}
          className="bg-[#002D69] text-white text-sm font-bold rounded-sm tracking-widest uppercase px-8 py-3 hover:bg-blue-800 transition-colors"
        >
          VIEW GALLERY
        </button>
      </div>

    </section>
  );
}