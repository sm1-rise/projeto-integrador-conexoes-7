
import { BotaoPainelAzul, BotaoLogin, BotaoPainelVerde, BotaoCinza, } from "./style";

interface TextoBotaoProps {
    type: string;
    text: string,
    onClick?: () => void,
}


export default function Botao({ text, type, onClick }: TextoBotaoProps) {
    switch (type) {
        case 'botaoLogin':
            return <BotaoLogin>{text}</BotaoLogin>
        case 'botaoPainelAzul':
            return <BotaoPainelAzul onClick={onClick}>{text}</BotaoPainelAzul>
        case 'botaoPainelVerde':
            return <BotaoPainelVerde>{text}</BotaoPainelVerde>
        case 'botaoCinza':
            return <BotaoCinza>{text}</BotaoCinza>
    }
}