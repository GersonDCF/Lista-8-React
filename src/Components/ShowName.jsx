import { useState } from 'react'
import '../style.css'

export default function ShowName() {
    
    const [nome, setNome] = useState("Wilton");


    function atualizarNome(event){
        setNome(event.target.value.toUpperCase())
    }
    
    return (
        <div>
            <form>
                <label htmlFor="">Nome </label>
                <input type="text" onChange={atualizarNome}/>
            </form>
            <p>{nome}</p>
        </div>
    )
}