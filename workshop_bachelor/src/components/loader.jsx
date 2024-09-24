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
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="/logo_epsi.png"
        alt="Logo EPSI"
        className="w-36 h-auto mb-16 opacity-0 animate-fade-in-up"
      />
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-blue-300"></div>
        </div>
      ) : (
        <button className="hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          <a href="/homepage">Accéder au plan</a>
        </button>
      )}
    </div>
  );
};

export default Loader;