import React, { useState, useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    const messageInterval = setInterval(() => {
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <img
        src="/logo_epsi.png"
        alt="Logo EPSI"
        className="w-72 h-auto mb-16 opacity-0 animate-fade-in-up"
      />
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-300"></div>
        </div>
      ) : (
        <button class="hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Accéder au plan
        </button>
      )}
    </div>
  );
};

export default Loader;