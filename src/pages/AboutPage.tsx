import MenuBarNoProtected from "../component/menuBarNoProtected";

export default function AboutPage() {
    return (
        <div>
            <MenuBarNoProtected />

            <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-teal-100 to-green-50 pt-6 px-4">
                <div className="flex-1">
                    <section className="space-y-8">
                        {/* Judul Utama */}
                        <h2 className="text-2xl font-bold text-cyan-800">Tentang Kami</h2>

                        {/* Deskripsi SIPEDIS */}
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-cyan-800">SIPEDIS</h3>
                            <p className="text-cyan-800 text-justify max-w-4xl">
                                <strong>SIPEDIS</strong> (Sistem Pendeteksi Dini Penyakit Kanker Menggunakan Chatbot dan Deteksi Citra Berbasis AI) adalah aplikasi web
                                yang memungkinkan pengguna untuk berkonsultasi melalui chatbot dan mengunggah gambar gejala yang dialami. Dengan dukungan teknologi
                                kecerdasan buatan, sistem menganalisis input dan memberikan informasi awal mengenai kemungkinan jenis kanker,
                                apakah gejala bisa ditangani secara mandiri, serta menyimpan riwayat pemeriksaan sebelumnya.
                            </p>
                        </div>

                        {/* Goals */}
                        <section>
                            <h3 className="text-3xl font-bold text-cyan-800 mb-2">Our Goals</h3>
                            <ul className="list-disc ml-6 text-cyan-800 space-y-1">
                                <li>Meningkatkan kesadaran dini terhadap gejala kanker.</li>
                                <li>Menyediakan layanan konsultasi cepat dan efisien melalui chatbot AI.</li>
                                <li>Membantu pengguna mengenali potensi penyakit secara mandiri sebelum pemeriksaan medis lanjutan.</li>
                            </ul>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
}
