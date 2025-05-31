import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await axios.post("https://sipedis-be-production.up.railway.app/signin", {
        email,
        password,
      });

      if (response.data.status === "success") {
        toast.success("Login berhasil! Selamat datang!");
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        navigate("/chat");
      } else {
        toast.error(response.data.message || "Login gagal. Coba lagi.");
      }

    } catch (err) {
      toast.error("Terjadi kesalahan saat login.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-100 to-green-50">
      <div className="w-96 p-10 bg-white rounded-2xl shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleLogin}>
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
            <p className="text-red-600 text-sm text-center mb-4">
              {error}
            </p>
          )}

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 font-bold text-white bg-teal-500 rounded hover:bg-teal-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Memproses..." : "Submit"}
          </button>

          {/* Link Registrasi */}
          <p className="mt-6 text-sm text-center text-gray-600">
            Belum punya akun?{" "}
            <a href="/auth/register" className="text-red-600 hover:text-red-700 ml-1 font-medium">
              Buat akun
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
