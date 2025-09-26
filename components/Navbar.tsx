export default function Navbar() {
  return (
    <nav className="flex w-full py-4 px-24 justify-between bg-white text-black">
      <div className="flex items-center text-lg font-bold tracking-wider">
        MUNDOHIRE
      </div>
      <div className="flex gap-8 items-center">
        <div className="cursor-pointer hover:text-gray-600">Busca emprego</div>
        <div className="cursor-pointer hover:text-gray-600">Empregador</div>
        <div className="cursor-pointer hover:text-gray-600">Preço</div>
        <div className="cursor-pointer hover:text-gray-600">
          Cadastrar Vagas
        </div>
        <div className="cursor-pointer hover:text-gray-600">Entrar</div>
        <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition cursor-pointer">
          + Publicar Vagas
        </button>
        <button className="bg-blue-600 border-2 border-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 hover:border-blue-700 transition cursor-pointer">
          Cadastrar
        </button>
        <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition cursor-pointer">
          Logar
        </button>
      </div>
    </nav>
  );
}
