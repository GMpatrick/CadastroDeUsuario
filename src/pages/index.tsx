import {useState, useEffect} from 'react';
import Botao from "../components/botao";
import Layout from "../components/Layout";
import Cliente from "../core/Cliente";
import Formulario from "../components/Formulario";
import Tabela from "../components/Tabela";
import useClientes from '../hooks/UseClientes';


export default function Home() {

  const { cliente, 
          clientes,
          selecionarCliente, 
          excluirCliente, 
          salvarCliente, 
          novoCliente,
          tabelaVisivel,
          exibirTabela } = useClientes()

  
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to bg-purple-500
        text-white 
      `}>
        <Layout titulo="Cadastro Simples">
          {tabelaVisivel ? (
            <>
              <div className="flex justify-end">
                <Botao className="mb-4" cor="green" 
                onCLick={novoCliente}
                
                >
                  Novo Cliente
                </Botao>
              </div>
              <Tabela clientes={clientes} 
                clienteSelecionado={selecionarCliente}
                clienteExcluido={excluirCliente}
              />  
            </>
          ): (
            <Formulario 
              cliente={cliente}
              clienteMudou={salvarCliente}
              cancelado={exibirTabela}
            
            />
          )}


          
        </Layout>
    </div> 
  )
}