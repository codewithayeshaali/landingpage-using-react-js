export default function Services({ services }) {
  return (
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

  );
}