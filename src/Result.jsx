import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { Benefits = 0, Recharge = 0 } = location.state || {};

  // Dummy vendor data (can later be replaced with API data)
  const vendors = [
    {
      id: 1,
      name: "AquaHarvest Solutions",
      service: "Rainwater Tank Installation",
      contact: "+91 98765 43210",
      rating: 4.8,
    },
    {
      id: 2,
      name: "EcoDrop Systems",
      service: "Recharge Pit & Hybrid Setup",
      contact: "+91 91234 56789",
      rating: 4.6,
    },
    {
      id: 3,
      name: "GreenRoof Harvesters",
      service: "Custom Rooftop Harvesting",
      contact: "+91 99887 77665",
      rating: 4.9,
    },
  ];

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 py-10 px-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Your Rainwater Harvesting Report</h2>

      {/* Results Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-2/3 mb-10">
        <h3 className="text-xl font-semibold mb-4">📊 Results Summary</h3>
        <p className="text-lg">💰 <strong>Estimated Benefits:</strong> ₹{Benefits.toFixed(2)}</p>
        <p className="text-lg">💧 <strong>Groundwater Recharge:</strong> {Recharge.toFixed(2)} L</p>
      </div>

      {/* Vendors Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-2/3">
        <h3 className="text-xl font-semibold mb-4">🔧 Nearby Vendors</h3>
        <p className="text-gray-600 mb-4">Here are some trusted vendors who can help set up your rainwater harvesting system:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
              <h4 className="text-lg font-bold text-green-600">{vendor.name}</h4>
              <p className="text-sm text-gray-700">{vendor.service}</p>
              <p className="text-sm">📞 {vendor.contact}</p>
              <p className="text-sm">⭐ {vendor.rating} / 5</p>
              <button
                onClick={() => alert(`Contacting ${vendor.name}...`)}
                className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                Contact Vendor
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-900"
        >
        🔙 Back to Calculator
      </button>
    </div>
        </>
  );
};

export default Result;
