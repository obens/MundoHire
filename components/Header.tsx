export default function Hero() {
  return (
    <div className="bg-[#0d0f14] text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Texto à esquerda */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Seu emprego dos sonhos <br /> já está procurando por você
          </h1>
          <p className="text-gray-400 mb-8 max-w-md">
            Diga adeus à busca interminável por empregos – crie seu perfil,
            melhore-o com IA e deixe as empresas encontrarem você com
            oportunidades relevantes.
          </p>
          <div className="flex gap-4 mb-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition">
              Create profile
            </button>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
              Browse jobs
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Are you an employer?{" "}
            <a href="#" className="text-white font-medium hover:underline">
              Post a job
            </a>
          </p>
        </div>

        {/* Cards à direita */}
        <div className="relative flex justify-center md:justify-end">
          {/* Card de Job */}
          <div className="bg-[#1a1c23] rounded-xl p-6 w-64 shadow-lg border border-gray-700 mr-[-40px] z-10">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                Tech&Co
              </span>
              <a href="#" className="text-xs text-gray-300 hover:underline">
                View job ↗
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-2">Aux de produção</h3>
            <p className="text-xs text-gray-400 mb-2">WORKPLACE</p>
            <p className="text-sm mb-3">🌐 Remote · 🇭🇹 Haiti</p>
            <p className="text-xs text-gray-400 mb-2">PAY</p>
            <p className="text-sm mb-3">100 – 110k USD/year</p>
            <p className="text-xs text-gray-400 mb-2">APPLICATIONS END</p>
            <p className="text-sm">June 6, 2025</p>
          </div>

          {/* Card de Candidato */}
          <div className="bg-[#1a1c23] rounded-xl p-6 w-64 shadow-lg border border-gray-700 ml-[-40px] z-20">
            <div className="flex justify-between items-center mb-4">
              <span></span>
              <a href="#" className="text-xs text-gray-300 hover:underline">
                View candidate ↗
              </a>
            </div>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Candidate"
              className="w-20 h-20 rounded-full mb-4 mx-auto"
            />
            <h3 className="text-lg font-semibold text-center">
              Wibens Maurice
            </h3>
            <p className="text-sm text-center text-gray-400 mb-3">
              aux. Produçao
            </p>
            <p className="text-sm text-center">🌐 Remote · 🇭🇹 Haiti</p>
          </div>
        </div>
      </div>
    </div>
  );
}
