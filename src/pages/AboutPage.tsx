import MenuBarNoProtected from "../component/menuBarNoProtected";

export default function AboutPage() {
  return (
    <div>
      <MenuBarNoProtected />

      <div className="flex flex-col items-center bg-gradient-to-b from-teal-100 to-green-50 min-h-screen px-4 py-10">
        {/* Bagian Judul & Deskripsi */}
        <div className="text-center max-w-2xl mb-12">
          
          <h1 className="text-5xl font-bold text-cyan-900 mb-8 mt-4 drop-shadow-md">
            SIPEDIS
          </h1>
          <p className="text-cyan-800 text-lg leading-relaxed text-justify">
            <strong>SIPEDIS</strong> (Sistem Pendeteksi Dini Penyakit Kanker Menggunakan Chatbot dan Deteksi Citra Berbasis AI) adalah aplikasi web
                                yang memungkinkan pengguna untuk berkonsultasi melalui chatbot dan mengunggah gambar gejala yang dialami. Dengan dukungan teknologi
                                kecerdasan buatan, sistem menganalisis input dan memberikan informasi awal mengenai kemungkinan jenis kanker,
                                apakah gejala bisa ditangani secara mandiri, serta menyimpan riwayat pemeriksaan sebelumnya.
          </p>
        </div>

        {/* Bagian Goals */}
        <div className="bg-cyan-900 text-white rounded-xl shadow-xl px-8 py-10 w-full max-w-3xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="text-center md:text-left md:p-15 w-full md:w-auto">
              <span className="block text-2xl mb-2 font-bold text-teal-200">Our</span>
              <h2 className="text-4xl font-bold text-white">Goals</h2>
            </div>

            {/* Daftar Goals */}
            <div className="flex flex-col space-y-6 w-full md:w-3/4">
              <div className="flex items-start gap-4 p-3 bg-teal-500 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="text-2xl">💡</div>
                <p>
                  Meningkatkan kesadaran dini terhadap gejala kanker
                </p>
              </div>
              <div className="flex items-start gap-4 p-3 bg-teal-500 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="text-2xl">📖</div>
                <p>
                  Menyediakan layanan konsultasi cepat dan efisien melalui chatbot AI.
                </p>
              </div>
              <div className="flex items-start gap-4 p-3 bg-teal-500 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className="text-2xl">🔍</div>
                <p>
                  Membantu pengguna mengenali potensi penyakit secara mandiri sebelum pemeriksaan medis lanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
