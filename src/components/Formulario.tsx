import {useState} from 'react' 
import Entrada from './Entrada'
import Cliente from '../core/Cliente'
import Botao from './botao'

interface FormularioProps{
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.getId 
    const [nome, setNome] = useState(props.cliente?.getNome ?? '')
    const [idade, setIdade] = useState(props.cliente?.getIdade ?? 0)
    return (
        <div>
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id}/>
            ):false}

            <Entrada texto="Nome" valor={nome} valorMudou={setNome} clasName="mb-4"/>

            <Entrada texto="Idade" tipo='number' valor={idade} valorMudou={setIdade} clasName="mb-4"/>
            
            <div className='flex justify-center mt-7'>
                <Botao cor='blue' className='mr-2' 
                    onCLick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>

                    {id ? 'Alterar' : 'Salvar'}
                </Botao>

                <Botao onCLick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}