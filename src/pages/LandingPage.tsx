import MenuBarNoProtected from "../component/menuBarNoProtected";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 to-green-50 flex flex-col">

      <MenuBarNoProtected />


      <main className="flex flex-col flex-1 items-center text-center max-w-7xl pt-15 mx-auto w-full p-6">
        <section className="mb-12 px-4">
          <h3 className="text-3xl font-bold text-teal-800 mb-4">
            Asisten Kesehatan Digital di Genggaman Anda
          </h3>
          <p className="text-slate-600 text-lg mb-6 max-w-xl mx-auto">
            Chatbot cerdas berbasis AI untuk membantu Anda mengenali kemungkinan penyakit dari gejala yang Anda alami.
          </p>
          <img
            src="/images/doctor_check_passien.png"
            alt="Landing Illustration"
            className="w-full max-w-md mx-auto"
          />
        </section>

        <section className="px-4 text-center w-full">
          <h2 className="text-3xl font-bold text-teal-800 mb-8">Feature</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center max-w-6xl mx-auto">
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
