import { useEffect, useState } from "react";
import Features from "./Home-Page/Features";
import Hero from "./Home-Page/Hero";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-teal-500">
        <span className="text-white loading loading-bars loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
