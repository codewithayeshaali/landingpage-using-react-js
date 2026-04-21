import React from "react";
import "@fontsource/lato"; 
import "@fontsource/lato/700.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYelp } from "react-icons/fa";
import { useState } from "react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Shop", "Services", "About", "Contact"];

  const categories = [
    { name: "Earrings", img: "src/assets/earring.png" },
    { name: "Necklaces", img: "src/assets/Item 2.png" },
    { name: "Bracelets", img: "src/assets/bracelet.png" },
    { name: "All Rings", img: "src/assets/all rings.png" },
    { name: "Engagement Rings", img: "src/assets/Item 5.png" },
  ];

  const products = [
    { id: 1, img: "src/assets/Item 1.png" },
    { id: 2, img: "src/assets/Item 3.png" },
    { id: 3, img: "src/assets/Item 4.png" },
  ];
   const reviews = [
    {
      text: "Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.",
      author: "Nico Jones",
    },
    {
      text: "What an amazing shopping experience! I tried other jewelers and didn't find anything I liked. Thank you so much.",
      author: "Tracy Willis",
    },
    {
      text: "Great quality, and showed they can work through a problem and maintain excellent customer service!!",
      author: "Susana Santos",
    },
  ];

  const services = [
    { name: "Jewelry Repair", img: "src/assets/Item 6.png" },
    { name: "Ring Sizing", img: "src/assets/Item 7.png" },
    { name: "Jewelry Polishing", img: "src/assets/Item 8.png" },
  ];
  return (
    <div className="w-full bg-white text-neutral-700">
       <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center px-6 sm:px-6 py-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 tracking-normal leading-tight">
            BAYSIDE FINE JEWELRY
          </h1>
            
          <div className="ml-auto flex items-center gap-20 sm:gap-8">
            <nav className="hidden lg:flex gap-15">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-800 text-sm font-medium hover:text-blue-600 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </nav>
            <button className="relative text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <FontAwesomeIcon icon={faBagShopping} className="text-xl cursor-pointer" />
            </button>
            <button
              className="lg:hidden text-gray-800 hover:text-blue-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="text-xl" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
            {navLinks.map((link, i) => (
              <a key={i} href="#"
                className="block py-2 text-gray-800 text-sm font-medium hover:text-blue-600"
                onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      <section className="relative w-full h-[50vh] sm:h-[70vh] md:h-screen">
        <img
          src="src/assets/Hero.png"
          alt="Jewelry hero"
          className="w-full h-full object-cover"
        />
      </section>
 <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002D69] tracking-normal leading-tight mb-8 sm:mb-12">
          Shop By Jewelry Type
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 text-center">
          {categories.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-gray-100 mb-3 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-sm sm:text-base lg:text-lg font-medium text-[#002D69]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#002D69] text-white flex flex-col justify-center px-8 sm:px-14 lg:px-24 py-14 sm:py-20">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            HAND CRAFTED
            <br />
            FINE PIECES.
          </h3>
          <p className="text-blue-100 font-bold text-base sm:text-lg leading-snug mb-8 max-w-md">
            We also firmly believed that our customers deserved more choices,
            straightforward information and legendary service.
          </p>
          <button className="border border-white bg-white text-[#002D69] px-6 py-2 w-fit text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors duration-200">
            LEARN MORE
          </button>
        </div>
        <img
          src="src/assets/Image.png"
          className="w-full h-64 sm:h-80 md:h-full object-cover"
          alt="Handcrafted jewelry"
        />
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002D69] tracking-normal leading-tight mb-8 sm:mb-12 uppercase">
          Our Latest Jewelry
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((item) => (
            <div key={item.id} className="overflow-hidden">
              <img
                src={item.img}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-300"
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-[#002D69] text-white text-sm font-medium rounded-sm tracking-widest uppercase px-8 py-3 hover:bg-blue-800 transition-colors duration-200">
            VIEW GALLERY
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 font-sans">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002D69] tracking-normal leading-tight mb-8 sm:mb-12 uppercase">
          Customer Reviews
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="border border-gray-200 pt-5 pl-5 pr-5 text-center relative bg-white">
              <span className="absolute top-4 left-6 text-5xl font-normal text-[#002D69] leading-none">
                "
              </span>
              <p className="text-base sm:text-[18px] text-neutral-700 italic leading-snug mt-6 mb-8">
                {review.text}
              </p>
              <p className="text-base sm:text-[18px] italic text-black pb-4">
                - {review.author}
              </p>
            </div>
          ))}
        </div>
      </section>
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002D69] tracking-normal leading-tight mb-8 sm:mb-12 uppercase">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((item, i) => (
            <div key={i} className="group cursor-pointer">
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
          <button className="bg-[#002D69] text-white text-sm font-medium rounded-sm tracking-widest uppercase px-8 py-3 hover:bg-blue-800 transition-colors duration-200">
            Learn More
          </button>
        </div>
      </section>

<footer className="bg-sky-200 w-full">
  <section className="py-16 sm:py-22 px-4 sm:px-10 lg:px-[124px]">
    <div className="max-w-4xl mx-auto flex border border-sky-200 bg-white overflow-hidden">
    <img
      src="src/assets/Rectangle 31.png"
      className="w-1/2 object-cover"
      alt="Ring"
    />
    <div className="w-1/2 flex flex-col items-center justify-center px-10 text-center">
      <h3 className="text-4xl font-bold text-[#002D69] mb-3">STAY IN TOUCH?</h3>
      <p className="text-base text-neutral-700 mb-6">
        Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
      </p>
      <button className="bg-[#002D69] text-white text-xs tracking-normal rounded-sm uppercase px-8 py-3 hover:bg-blue-900">
        SUBSCRIBE
      </button>
    </div>
    </div>
  </section>
  <div className="px-4 sm:px-10 lg:px-[124px] mb-10">
    <div className="flex gap-[124px] sm:grid-cols-3 sm:gap-12 lg:gap-[124px]">
      {[
        ["Product", ["Privacy Policy", "Terms of Service", "FAQ"]],
        ["Resources", ["Documentation", "Case Studies"]],
        ["Company", ["About Us", "Contact Us"]],
      ].map(([title, links]) => (
        <div key={title}>
          <h4 className="text-base sm:text-xl font-bold text-neutral-700 mb-4">{title}</h4>
          {links.map((l) => (
            <a key={l} href="#" className="block text-sm sm:text-base text-neutral-700 hover:text-blue-700 mb-3">
              {l}
            </a>
          ))}
        </div>
      ))}
    </div>
  </div>
 <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 border-t border-sky-300 pt-5 pb-6 px-4 sm:px-10 lg:px-[124px]">
          <p className="text-sm sm:text-base font-bold text-zinc-600">
            © Blue Diamond Jewelry™ 2021
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaPinterestP, FaYelp].map((Icon, i) => (
              <a key={i} href="#"
                className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-full hover:bg-blue-700 transition-colors">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
    
  );
}
