import "./banner.css";
const Banner = () => {
  return (
    <div>
      <div className="hero banner py-32 rounded-3xl spay-6">
        <div className="hero-content text-center text-neutral-content">
          <div className=" max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5 text-white">
              Embark on a culinary journey with our bespoke cooking classes,
              meticulously crafted to suit your tastes and skill level. Unleash
              your inner chef and savor every flavorful moment!
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn bg-[#0BE58A] px-6 rounded-full border-none ">
                Explore Now
              </button>
              <button className="btn btn-ghost text-white border-2 border-white rounded-full">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
