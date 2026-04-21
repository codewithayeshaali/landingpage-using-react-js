
import { useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/categories";
import HandcraftedSection from "../components/handcraftedsection";
import Products from "../components/product";
import Reviews from "../components/review";
import Services from "../components/Services";
import Footer from "../components/Footer";

function LandingPage() {
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
      
      <Header
        navLinks={navLinks}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Hero />
      <Categories categories={categories} />
      <HandcraftedSection />
      <Products products={products} />
      <Reviews reviews={reviews} />
      <Services services={services} />
      <Footer />
      
    </div>
  );
}

export default LandingPage;