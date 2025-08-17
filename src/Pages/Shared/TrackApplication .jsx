import { useEffect, useState } from "react";

const TrackApplication = () => {
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("application");
    if (saved) {
      setApplication(JSON.parse(saved));
    }
  }, []);

  return (
    <section>
      {/* Banner */}
      <div className="h-60 bg-gradient-to-r from-blue-600 to-black hero">
        <div className="text-center hero-content">
          <div>
            <h1 className="mb-6 text-3xl font-extrabold text-white">
              Track Your Application
            </h1>
          </div>
        </div>
      </div>
      <div className="p-8 bg-gray-50">
        {application ? (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p>
              <strong>Name:</strong> {application.name}
            </p>
            <p>
              <strong>Passport:</strong> {application.passport}
            </p>
            <p>
              <strong>Visa Type:</strong> {application.visaType}
            </p>
            <p className="mt-4 font-semibold text-green-600">
              Status: In Progress ✅
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No application found. Please submit your application first.
          </p>
        )}
      </div>
    </section>
  );
};

export default TrackApplication;
