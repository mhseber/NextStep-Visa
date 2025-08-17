import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyApplication = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    passport: "",
    visaType: "",
  });

  const steps = ["Fill Details", "Submit Form", "Verify Documents", "Approval"];
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("application");
    if (saved) {
      setFormData(JSON.parse(saved));
      setCurrentStep(1);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.passport || !formData.visaType) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please fill all fields ⚠️",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // Save form to localStorage
    localStorage.setItem("application", JSON.stringify(formData));

    // Progress 100% এবং success alert
    setCurrentStep(steps.length - 1);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "All Sections Completed ✅",
      showConfirmButton: false,
      timer: 1500,
    });

    // Clear form
    setFormData({ name: "", passport: "", visaType: "" });
    setCurrentStep(0);
    localStorage.removeItem("application");
  };

  const progressPercent = ((currentStep + 1) / steps.length) * 100;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-teal-500">
        <span className="text-white loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <section>
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-black hero">
        <div className="text-center hero-content">
          <div>
            <h1 className="text-5xl font-extrabold text-white">
              Apply for Your Visa Easily
            </h1>
            <p className="py-6 font-bold text-gray-400">
              Fill your details, track your progress, and get updates in
              real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-lg mx-auto mt-8">
        <h3 className="mb-2 text-lg font-bold">Application Progress</h3>
        <div className="flex justify-between mb-2 text-sm font-medium">
          {steps.map((step, idx) => (
            <span
              key={idx}
              className={idx <= currentStep ? "text-blue-600" : "text-gray-400"}
            >
              {step}
            </span>
          ))}
        </div>
        <div className="w-full h-4 bg-gray-200 rounded">
          <div
            className="h-4 transition-all duration-500 bg-blue-600 rounded"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-lg p-6 mx-auto mt-8 mb-8 bg-white border-4 border-black rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">My Application</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="passport"
            placeholder="Passport Number"
            value={formData.passport}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <select
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Visa Type</option>
            <option value="Student Visa">Student Visa</option>
            <option value="Work Visa">Work Visa</option>
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Religious Visa">Religious Visa</option>
            <option value="Skilled Worker Visa">Skilled Worker Visa</option>
            <option value="Investor Visa">Investor Visa</option>
            <option value="Conference Visa">Conference Visa</option>
            <option value="Dependent Visa">Dependent Visa</option>
          </select>
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Save Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default MyApplication;
