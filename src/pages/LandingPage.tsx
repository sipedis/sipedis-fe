export default function LandingPage() {
    return (
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Konten Utama */}
        <main className="flex-1 bg-gradient-to-b from-teal-100 to-green-50 p-6 pt-20 md:pt-16 md:pl-[10px] md:ml-56">
          <section className="text-center mb-12">
            <h3 className="text-3xl font-bold text-cyan-800 mb-4">
              Asisten Kesehatan Digital di Genggaman Anda
            </h3>
            <p className="text-slate-600 text-lg mb-6 max-w-xl mx-auto">
              Chatbot cerdas berbasis AI untuk membantu Anda mengenali kemungkinan penyakit dari gejala yang Anda alami.
            </p>
            <img
              src="/images/doctor_check_passien.png"
              alt="Landing Illustration"
              className="w-1/2 mx-auto"
            />
          </section>
  
          {/* Fitur */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-cyan-800 mb-8">Feature</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center px-4 max-w-6xl mx-auto">
              <div className="bg-teal-500 rounded-2xl p-3 w-full max-w-xs">
                <img
                  src="/images/doctor-with-medical-services.png"
                  alt="Feature 1"
                  className="w-full"
                />
              </div>
              <div className="bg-teal-500 rounded-2xl p-3 w-full max-w-xs">
                <img
                  src="/images/medical-service-set-icons.png"
                  alt="Feature 2"
                  className="w-full"
                />
              </div>
              <div className="bg-teal-500 rounded-2xl p-3 w-full max-w-xs">
                <img
                  src="/images/smartphone-with-medical-services.png"
                  alt="Feature 3"
                  className="w-full"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
  