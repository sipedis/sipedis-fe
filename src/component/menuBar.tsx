import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Tombol Hamburger (hanya di mobile) */}
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 bg-white w-56 h-full p-5 
          transition-transform duration-300 ease-in-out transform
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0`}
      >
        <h1 className="text-cyan-800 text-2xl font-bold mb-6">SIPEDIS</h1>
        <ul className="space-y-3">
          <li>
            <a href="/" className="block px-3 py-2 rounded hover:bg-teal-100 focus:bg-teal-100 text-cyan-800 font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="/chat" className="block px-3 py-2 rounded hover:bg-teal-100 focus:bg-teal-100 text-cyan-800 font-medium">
              Chat Box
            </a>
          </li>
          <li>
            <a href="/about" className="block px-3 py-2 rounded hover:bg-teal-100 focus:bg-teal-100 text-cyan-800 font-medium">
              About Us
            </a>
          </li>
        </ul>
        <div className="mt-105">
          <p className="text-sm text-gray-600 px-3 py-1">user</p>
          <button className="block w-full text-left px-3 py-2 text-blue-600 hover:bg-teal-100 rounded">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
