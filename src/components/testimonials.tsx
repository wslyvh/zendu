export function Testimonials() {
  return (
    <section className="max-w-5xl mx-auto mb-8 py-16 px-4 text-center text-gray-800">
      <h2 className="text-sm text-accent font-medium mb-2">
        What early users are saying
      </h2>
      <div className="carousel carousel-center w-full rounded-box mt-6 overflow-x-auto">
        <div
          id="item1"
          className="carousel-item w-full flex justify-center snap-center"
        >
          <div className="p-4">
            <blockquote className="bg-[#f7f2eb] p-6 rounded-xl shadow w-full max-w-xl mx-auto">
              <p className="text-lg italic text-gray-800">
                “Knowing that you were going to ask from time to time was a nice
                reminder to stay on track.”
              </p>
              <footer className="mt-4 text-sm text-gray-600">- Steve</footer>
            </blockquote>
          </div>
        </div>
        <div
          id="item2"
          className="carousel-item w-full flex justify-center snap-center"
        >
          <div className="p-4">
            <blockquote className="bg-[#f7f2eb] p-6 rounded-xl shadow w-full max-w-xl mx-auto">
              <p className="text-lg italic text-gray-800">
                “When I tell you I have something to do, I will definitely end
                up attempting to finish it.”
              </p>
              <footer className="mt-4 text-sm text-gray-600">- Gabriel</footer>
            </blockquote>
          </div>
        </div>
        <div
          id="item3"
          className="carousel-item w-full flex justify-center snap-center"
        >
          <div className="p-4">
            <blockquote className="bg-[#f7f2eb] p-6 rounded-xl shadow w-full max-w-xl mx-auto">
              <p className="text-lg italic text-gray-800">
                “I feel this sense, of not letting you down.”
              </p>
              <footer className="mt-4 text-sm text-gray-600">- Ryan</footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-4 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </section>
  );
}
