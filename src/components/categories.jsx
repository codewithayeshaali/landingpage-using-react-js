export default function Categories({ categories }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 uppercase">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002D69] tracking-normal leading-tight mb-8 sm:mb-12 ">
          Shop By Jewelry Type
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 lg:gap-[34px] text-center">
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
  );
}