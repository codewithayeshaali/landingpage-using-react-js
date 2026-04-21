export default function HandcraftedSection() {
  return (
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
  );
}