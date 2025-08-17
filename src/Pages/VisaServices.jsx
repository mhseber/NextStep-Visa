import { useEffect, useState } from "react";
import { Card } from "antd";
import "antd/dist/reset.css";

const VisaServices = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, []);

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter === "All" || service.type === filter;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-blue-600 loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <section>
      <div className="px-4 py-8 text-black rounded-lg bg-gradient-to-r from-indigo-900 to-teal-500">
        <h1 className="mb-6 text-4xl font-extrabold text-center text-white">
          Visa Services
        </h1>

        {/* Search + Filter */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6 sm:flex-row">
          <input
            type="text"
            placeholder="Search service..."
            className="px-3 py-2 border rounded-md shadow-sm w-60"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="px-3 py-2 border rounded-md shadow-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Education">Education</option>
            <option value="Employment">Employment</option>
            <option value="Travel">Travel</option>
          </select>
        </div>
      </div>
      {/* Service Cards */}
      <div className="grid gap-6 pt-5 sm:grid-cols-2 lg:grid-cols-3 ">
        {filteredServices.map((service) => (
          <Card
            key={service.id}
            bordered={true}
            className="transition-all duration-300 shadow-md bg-blue-950 hover:shadow-lg"
            cover={
              <img
                alt={service.name}
                src={service.img}
                className="object-cover w-full h-48 p-2 rounded-lg"
              />
            }
            title={
              <span className="text-2xl font-bold text-white">
                {service.name}
              </span>
            }
          >
            <p className="font-bold text-gray-200">{service.description}</p>
            <p className="mt-2 font-medium text-blue-300">
              Processing: {service.processingTime}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default VisaServices;
