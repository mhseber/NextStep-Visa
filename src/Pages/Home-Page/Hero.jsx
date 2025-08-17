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
        {/* Overlay with semi-transparent black */}
        <div className="hero-overlay bg-black/40"></div>

        <div className="px-4 text-center hero-content text-neutral-content sm:px-6 lg:px-20">
          <div className="max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl">
            <h1 className="mb-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Explore Visa Services with <br />
              NextStep
              <span className="text-blue-500"> Visa</span>
            </h1>
            <p className="mb-5 text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
              From application to approval — NextStep{" "}
              <span className="text-blue-500">Visa</span> makes every step
              simple, fast, and transparent.
            </p>
            <button className="btn btn-primary btn-lg sm:btn-md md:btn-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
