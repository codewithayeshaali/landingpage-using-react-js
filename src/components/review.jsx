export default function Reviews({ reviews }) {
  return (
   <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 font-sans">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002D69] tracking-normal leading-tight mb-8 sm:mb-12 uppercase">
          Customer Reviews
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="border border-gray-200 pt-5 pl-5 pr-5 text-center relative bg-white"
            >
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
  );
}