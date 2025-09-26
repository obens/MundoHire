export default function Navbar() {
  return (
    <nav className="flex w-full p-4 justify-between bg-white text-black">
      <div>
        <strong>mundohire.com/jobs</strong>
      </div>
      <div>Busca emprego</div>
      <div>Empregador</div>
      <div>Preço</div>
      <div>Cadastrar Vagas</div>
      <div>Entrar</div>

      <button className="bg-white text-blue-500 px-2 py-2 rounded-full font-medium hover:bg-blue-50 transition">
        + Publicar Vagas
      </button>
      <button className="bg-blue-600 border-2 border-blue-600 text-white px-2 py-2 rounded-full font-medium hover:bg-blue-700 hover:border-blue-700 transition">
        Cadastrar
      </button>

      <button className="bg-white text-blue-600 border-2 border-blue-600 px-2 py-2 rounded-full font-medium hover:bg-blue-50 transition">
        Logar
      </button>
    </nav>
  );
}
