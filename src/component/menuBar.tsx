import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

interface Room {
  room_id: string;
}

export default function Navbar() {
  const { user } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const userMenuRef = useRef<HTMLDivElement>(null);

  const params = useParams<{ roomId?: string }>();
  const currentRoomId = params.roomId || null;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("https://sipedis-be-production.up.railway.app/chat/rooms", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setRooms(res.data.data))
      .catch((err) => {
        console.error("Failed to fetch chat rooms", err);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setShowUserMenu(false);
      }
    }

    if (showUserMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserMenu]);

  const handleCreateNewMessage = () => {
    navigate("/chat");
    setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Tombol Hamburger (Mobile) */}
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      <div
        className={`fixed top-0 left-0 z-40 bg-white w-56 h-full p-5 
          transition-transform duration-300 ease-in-out transform
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 flex flex-col justify-between`}
      >
        <div>
          <h1 className="text-cyan-800 text-2xl font-bold mb-6">SIPEDIS</h1>

          <button
            onClick={handleCreateNewMessage}
            className="mb-4 w-full bg-teal-700 text-white rounded px-3 py-2 hover:bg-cyan-700 transition"
          >
            New Message
          </button>

          <ul
            className="mt-2 space-y-1 text-sm"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            {rooms.map((room) => {
              const isActive = room.room_id === currentRoomId;
              return (
                <li key={room.room_id}>
                  <Link
                    to={`/chat/${room.room_id}`}
                    onClick={() => setSidebarOpen(false)}
                    className={`block py-1 px-2 rounded text-gray-700 hover:bg-teal-500 hover:text-white hover:font-semibold ${isActive ? "bg-teal-500 text-white font-semibold" : ""
                      }`}
                  >
                    Room {room.room_id.slice(0, 15)}...
                  </Link>
                </li>
              );
            })}
            {rooms.length === 0 && (
              <li className="px-2 py-1 text-gray-400">No rooms</li>
            )}
          </ul>
        </div>

        <div ref={userMenuRef} className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            aria-label="User menu"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-700 text-white font-bold text-lg cursor-pointer shadow-lg hover:bg-cyan-800 transition"
          >
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </button>

          {showUserMenu && (
            <div className="absolute bottom-14 left-0 bg-white border border-gray-300 rounded shadow-md w-36 py-2 z-50">
              <Link
                to='/profile'
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
