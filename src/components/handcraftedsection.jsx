export default function HandcraftedSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 font-lato">
      <div className="bg-[#002D69] text-white flex flex-col justify-center px-8 sm:px-14 lg:px-24 py-14 sm:py-20">
        <h3 className="text-[32px] sm:text-[40px] lg:text-[54px] font-semibold leading-tight mb-4">
          HAND CRAFTED
          <br />
          FINE PIECES.
        </h3>
        <p className="text-[18px] sm:text-[22px] lg:text-[28px] font-medium leading-[1.1] tracking-normal mb-8 max-w-[686px]">
          We also firmly believed that our customers deserved more choices,
          straightforward information and legendary service.
        </p>
        <button className="border border-white bg-white text-[#002D69] rounded-[4px] w-[170px] h-[42px] text-[16px] font-semibold uppercase hover:bg-gray-100 transition-colors duration-200">
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
