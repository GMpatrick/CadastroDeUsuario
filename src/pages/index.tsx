import Botao from "../components/botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
    {/* <h1 className={`flex h-screen justify-center 
      items-center bg-gradient-to-r from bg-purple-500 to-blue-600 `}>
      <span className="text-4xl ">Texto</span>
    </h1> exemplo de como deve ser*/}

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Patrick', 19, '2'),
    new Cliente('Pai', 54, '3'),
    new Cliente('Mãe', 52, '4')
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.getNome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente.getId)
  }
  
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to bg-purple-500
        text-white 
      `}>
        <Layout titulo="Cadastro Simples">
          <div className="flex justify-end">
            <Botao className="mb-4" cor="green">Novo Cliente</Botao>
          </div>
            <Tabela clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            /> 
        </Layout>
    </div> 
  )
}