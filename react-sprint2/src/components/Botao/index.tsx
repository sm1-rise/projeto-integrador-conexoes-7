import { Btt } from "./style"


interface ButtonProps {
    text: string;
    visible?: boolean
    onClick?: () => void

}

export default function Botao({
    text = "ver detalhes",
    visible = true,
    onClick,

}: ButtonProps) {
    onClick
    return <>{visible &&
        <Btt onClick={onClick}>{text}</Btt>}

    </>
}