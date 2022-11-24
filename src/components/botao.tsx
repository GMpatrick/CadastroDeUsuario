interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray' | 'red'
    className?: string
    children: any
    onCLick?: () => void
}

export default function Botao(props: BotaoProps){
    
    const  corOFC = props.cor ?? 'gray'

    return (
        <button onClick={props.onCLick} className={`
            bg-gradient-to-r from-${corOFC}-400 to-${corOFC}-700
            bg-${corOFC}
            text-white px-4 py-2 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}