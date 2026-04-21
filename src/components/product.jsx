export default function Products({ products }) {
  return (
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
  );
}