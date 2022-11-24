import {useState} from 'react';
import Botao from "../components/botao";
import Layout from "../components/Layout";
import Cliente from "../core/Cliente";
import Formulario from "../components/Formulario";
import Tabela from "../components/Tabela";

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState< 'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Patrick', 19, '2'),
    new Cliente('Pai', 54, '3'),
    new Cliente('Mãe', 52, '4')
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente.getId)
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

  
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to bg-purple-500
        text-white 
      `}>
        <Layout titulo="Cadastro Simples">
          {visivel === 'tabela' ? (
            <>
              <div className="flex justify-end">
                <Botao className="mb-4" cor="green" 
                onCLick={novoCliente}
                
                >
                  Novo Cliente
                </Botao>
              </div>
              <Tabela clientes={clientes} 
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}
              />  
            </>
          ): (
            <Formulario 
              cliente={cliente}
              clienteMudou={salvarCliente}
              cancelado={() => setVisivel('tabela')}
            
            />
          )}


          
        </Layout>
    </div> 
  )
}