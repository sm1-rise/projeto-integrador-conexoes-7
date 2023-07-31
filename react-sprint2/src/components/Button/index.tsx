import { Btt } from "./style"
interface ButtonProps {
    text: string
}

export default function Button({
    text
}: ButtonProps) {
    return <Btt>{text}</Btt>

}

