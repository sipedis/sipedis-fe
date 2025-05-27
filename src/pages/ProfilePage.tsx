import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [user, setUser]= useState<{ name: string; email: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil data user dari localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/auth/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  return (
    <div className="bg-gradient-to-br from-teal-100 to-green-50 min-h-screen flex items-center justify-center px-10">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-lg p-25 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-teal-900 absolute top-40"> My Profile</h2>
        <img
          src="/images/profile.png"
          className="w-40 h-40 object-cover rounded-full"
        />
        <p className="text-teal-600 text-2xl font-medium mb-1">{user?.name}</p>
        <p className="text-gray-500 mb-6">{user?.email}</p>
        <button 
        onClick={handleLogout}
        className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">
          Logout
        </button>
      </div>
    </div>
  );
}
