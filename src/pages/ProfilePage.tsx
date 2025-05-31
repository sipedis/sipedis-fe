import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-green-50 flex items-center justify-center px-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8 flex flex-col items-center relative">
        <h2 className="text-2xl font-semibold text-teal-900 mb-6">My Profile</h2>
        <img
          src="/images/profile.png"
          alt="Profile"
          className="w-40 h-40 object-cover rounded-full mb-4"
        />
        <p className="text-teal-600 text-2xl font-medium mb-1">{user?.name}</p>
        <p className="text-gray-500 mb-6">{user?.email}</p>
        <button
          onClick={handleLogout}
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
