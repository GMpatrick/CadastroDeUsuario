import Layout from "../components/Layout";

export default function Home() {
    {/* <h1 className={`flex h-screen justify-center 
      items-center bg-gradient-to-r from bg-purple-500 to-blue-600 `}>
      <span className="text-4xl ">Texto</span>
    </h1> exemplo de como deve ser*/}
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to bg-purple-500
        text-white 
      `}>
        <Layout titulo="Cadastro Simples">
            <span>Conteudo</span>           
        </Layout>
    </div> 
  )
}