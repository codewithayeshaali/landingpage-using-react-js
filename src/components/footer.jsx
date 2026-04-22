import { FaFacebookF, FaInstagram, FaPinterestP, FaYelp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sky-200 w-full">
      <section className="py-16 sm:py-22 px-4 sm:px-10 lg:px-[124px]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white overflow-hidden">
          <img
            src="src/assets/Rectangle 31.png"
            className="w-full md:w-1/2 h-60 md:h-auto object-cover"
            alt="Ring"
          />
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 sm:px-10 py-8 text-center">
            <h3 className="text-4xl font-bold text-[#002D69] mb-3">
              STAY IN TOUCH?
            </h3>
            <p className="text-base text-neutral-700 mb-6">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <button className="bg-[#002D69] text-white text-xs tracking-normal rounded-sm uppercase px-8 py-3 hover:bg-blue-900">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
<section className="mb-10">
  <div className="max-w-[1245px] ml-[124px] pr-4 sm:pr-10">
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[124px]">
      
      {[
        ["Product", ["Privacy Policy", "Terms of Service", "FAQ"]],
        ["Resources", ["Documentation", "Case Studies"]],
        ["Company", ["About Us", "Contact Us"]],
      ].map(([title, links]) => (
        
        <div key={title}>
          <h4 className="text-base sm:text-xl font-bold text-neutral-700 mb-4">
            {title}
          </h4>

          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="block text-sm sm:text-base text-neutral-700 hover:text-blue-700 mb-3"
            >
              {l}
            </a>
          ))}
        </div>

      ))}

    </div>
  </div>
</section>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 border-t border-sky-300 pt-5 pb-6 px-4 sm:px-10 lg:px-[124px]">
        <p className="text-sm sm:text-base font-bold text-zinc-600">
          © Blue Diamond Jewelry™ 2021
        </p>
        <div className="flex gap-3">
          {[FaFacebookF, FaInstagram, FaPinterestP, FaYelp].map((Icon, i) => (
            <a
              key={i}
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
