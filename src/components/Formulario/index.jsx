import { useState } from "react";

const Formulario = () => {    
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    const result = () =>{
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if ( media >= 7) {
            return (
                <p>
                    Olá {nome}, sua média é {media.toFixed(1)} e você foi aprovado
                </p>
                )
            }
            else {
                return (
                    <p>
                        Olá  {nome}, sua média é {media.toFixed(1)} e  você não foi aprovado
                    </p>
                )
            }
        }
    

    return (
        <>
        <input type="text" placeholder="Digite aqui o seu nome" onChange={e=>setNome(e.target.value)}/>
        <input type="number" placeholder="Digitde a Nota A" onChange={e =>setMateriaA(parseFloat(e.target.value))} />
        <input type="number" placeholder="Digitde a Nota B" onChange={e =>setMateriaB(parseFloat(e.target.value))} />
        <input type="number" placeholder="Digitde a Nota C" onChange={e =>setMateriaC(parseFloat(e.target.value))} />

        <p>{result()}</p>
        
        </>
    )
}

export default Formulario;