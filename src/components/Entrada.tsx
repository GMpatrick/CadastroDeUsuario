interface EntradaProps{
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    clasName?: string
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    return (
        <div className={`flex flex-col ${props.clasName}`}>
            <label className="mb-4">
                {props.texto}
            </label>

            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-50 px-4 py-2 
                    ${props.somenteLeitura ? '' : 'focus:bg-inherit'}
                `}
            />
        </div>
    )
}