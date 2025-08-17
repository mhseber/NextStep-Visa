import { FaArrowRight } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      title: "Explore Services",
      description:
        "Check different visa types and learn about requirements easily.",
      icon: "🧭", // তুমি চাইলে React Icons ব্যবহার করতে পারো
    },
    {
      title: "Apply for Visa",
      description: "Submit your application online quickly and securely.",
      icon: "📝",
    },
    {
      title: "Track Application",
      description: "Monitor your visa application status in real-time.",
      icon: "📊",
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-extrabold sm:text-4xl">
          Our Key Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <button className="btn btn-primary sm:btn-md md:btn-lg">
                <FaArrowRight className="text-lg" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
