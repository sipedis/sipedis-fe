import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/signup", {
        name,
        email,
        password,
      });

      if (response.data.status === "success") {
        toast.success("Registrasi berhasil! Silakan login.");
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      } else {
        toast.error(response.data.message || "Registrasi gagal. Coba lagi.");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat registrasi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-100 to-green-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          {/* Input Nama */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
              Nama
            </label>
            <input
              id="name"
              type="text"
              placeholder="Masukkan nama"
              className="w-full px-3 py-2 border rounded focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Input Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Masukkan email"
              className="w-full px-3 py-2 border rounded focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Input Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Masukkan password"
              className="w-full px-3 py-2 border rounded focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-sm text-center mb-4">{error}</p>
          )}

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 font-bold text-white bg-teal-500 rounded hover:bg-teal-700 disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Memproses..." : "Submit"}
          </button>

          {/* Link Login */}
          <p className="mt-6 text-sm text-center text-gray-600">
            Sudah punya akun?
            <a
              href="/auth/login"
              className="text-sky-500 hover:text-sky-600 ml-1 font-medium"
            >
              Login di sini
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
