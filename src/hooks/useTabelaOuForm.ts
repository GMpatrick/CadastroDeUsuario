import {useState} from 'react'

export default function useTabelaOuForms(){
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

    return {
        formularioVisive: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirFormulario
    }
}