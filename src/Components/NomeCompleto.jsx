import { useState } from 'react'
import '../style.css'

export default function NomeCompleto() {
    
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [exibirFullName, setExibirName] = useState(false);


    function LerNome(event){
        setNome(event.target.value);
    }
    function LerSobrenome(event){
        setSobrenome(event.target.value);
    }
    function Exibirnome(event){
        setExibirName(true)
    }
    
    return (
        <div>
            <form>
                <label htmlFor="">Nome: </label>
                <input type="text" onChange={LerNome} />
                <br /><br />
                <label htmlFor="">Sobrenome: </label>
                <input type="text"  onChange={LerSobrenome} />
            </form>
                <br /> <br />
                <button onClick={Exibirnome}>Exibir nome completo</button>
            
            {exibirFullName && <p>{nome} {sobrenome}</p>}
        </div>
    )
}