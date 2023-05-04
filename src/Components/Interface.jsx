import { useState } from 'react'
import '../style.css'

export default function Interface() {
    
    const [nome, setNome] = useState("");


    function Limitador(event){

        setNome(event.target.value);
        
            
    }
    
    const limite = 120;
    const restante = limite - nome.length;
    return (
        <div>
            <form>
                <label htmlFor="">Texto:</label>
                <br />
                <textarea onChange={Limitador} value={nome} maxLength={limite}  />
            </form>
            <p>Restante: {restante} caracteres</p>
        </div>
    )
}