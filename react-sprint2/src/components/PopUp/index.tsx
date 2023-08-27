import { Alert,AlertTitle, Button } from "@mui/material";


interface PopUpProps {
  isOpen: boolean;
}

export default function PopUp({isOpen}:PopUpProps){

    if (isOpen){
        return(<>
           <div>POP UP</div>
        </>);
    }

    return null

}
