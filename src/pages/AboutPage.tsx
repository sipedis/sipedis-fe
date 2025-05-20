export default function AboutPage() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <div className="flex-1 bg-gradient-to-b from-teal-100 to-green-50">
                <section className="">
                    <h2 className="text-2xl font-bold text-cyan-800">Tentang Kami</h2>
                    <div className="flex justify-between">
                        <h3 className=" text-3xl font-bold text-cyan-800">SIPEDIS</h3>
                        <p className="text-cyan-800 max-w-xl mx-auto">
                        SIPEDIS (Sistem Pendeteksi Dini Penyakit Kanker Menggunakan Chatbot dan Deteksi Citra Berbasis AI), sebuah aplikasi berbasis web 
                        yang memungkinkan pengguna berkonsultasi melalui chatbot dan mengunggah gambar gejala yang dialami. Dengan dukungan teknologi 
                        kecerdasan buatan, sistem akan menganalisis input tersebut dan memberikan informasi awal mengenai kemungkinan jenis penyakit kanker, 
                        apakah gejala tersebut masih dapat ditangani secara mandiri, serta riwayat pemeriksaan sebelumnya.
                        </p>
                    </div>

                    {/* goals */}
                    <section className="">
                    <h3 className="text-3xl font-bold text-cyan-800">Our Goals</h3>
                    </section>

                </section>
            </div>

        </div>
    )
}
