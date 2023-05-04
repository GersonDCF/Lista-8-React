import { useState } from "react"
import '../style.css'

export default function Contador() {
    
    const [cont, setCont] = useState(3);

    function Incrementar() {
        if(cont<7){
        setCont(cont+1)
        }
    }
    function Decrementar() {
        if(cont>3){
            setCont(cont-1)
        }
        
    }
    
    return (
        <div>
            <p className="vermei">Intervalo (limite) do contador: <span>[3,7]</span></p>
            <p><b>Valor atual do contador: </b>{cont}</p>
            <button onClick={Incrementar}>+</button>
            <button onClick={Decrementar}>-</button>
        </div>
    )
}