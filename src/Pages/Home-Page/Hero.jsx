import visaBg from "../../../public/assets/visa-bg.webp";
const Hero = () => {
  return (
    <div>
      <div
        className="min-h-screen hero"
        style={{
          backgroundImage: `url(${visaBg})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="">
            <h1 className="mb-5 font-extrabold text-7xl">
              Explore Visa Services with <br /> NextStep Visa
            </h1>
            <p className="mb-5 font-bold">
              From application to approval — NextStep Visa makes every step
              simple, fast, and transparent.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
