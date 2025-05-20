export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-100 to-green-50">
      <div className="w-96 p-10 bg-white rounded-2xl shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
        <form>
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
            />
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 font-bold text-white bg-teal-500 rounded hover:bg-teal-700"
          >
            Submit
          </button>

          {/* Link Registrasi */}
          <p className="mt-6 text-sm text-center text-gray-600">
            Belum punya akun? 
            <a href="/auth/register" className="text-red-600 hover:text-red-700 ml-1 font-medium">Buat akun</a>
          </p>
        </form>
      </div>
    </div>
  );
}
